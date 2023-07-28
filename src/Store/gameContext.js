import React, { createContext, useEffect, useState } from 'react';
import { addDoc, collection, firestore } from '../firestore';
import info from '../Modal';
import { getDocs } from 'firebase/firestore';


const GameDataContext = createContext();

export function GameDataProvider({ children }) {
    const [count, setCount] = useState(3);
    const selections = ["Scissors", "Paper", "Stone"];
    const itemsThatDefeat = {
      Scissors: ["Paper", "Scissors"],
      Paper: ["Stone", "Paper"],
      Stone: ["Scissors", "Stone"],
    };
    const [userNames , setUserNames] = useState({
      0 : "",
      1: ""
    })
    const [isVisibleLandingButton, setIsVisibleLandingButton] = useState(false);
    const [score, setScore] = useState({0: 0, 1 : 0});
    const [usersSelection , setUsersSelection] = useState({
      [0] : [],
      [1] : [],
    });
    const [ round, setRound] = useState(1);
    const [expectedSelection, setExpectedSelection] = useState(0);
    const [wonUser , setWonUser] = useState(0);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [totalWinner, setTotalWinner] = useState("");
    const [ canPushToGameData, setCanPushToGameData] = useState(false);
    useEffect(()=>{
      let selectionData = usersSelection;
      let winData = Object.keys(selectionData).reduce((acc,curr)=>{
        acc[curr] = selectionData[curr].filter((e,i)=>{
          return selectionData[Number(!Number(curr))][i] && itemsThatDefeat[e.item].includes(selectionData[Number(!Number(curr))][i].item)
        }).length
        return acc
      },{});
      if(selectionData[1].length && selectionData[0].length == selectionData[1].length){
        if(itemsThatDefeat[selectionData[0][selectionData[0].length-1].item].includes(selectionData[1][selectionData[1].length-1].item) && itemsThatDefeat[selectionData[1][selectionData[1].length-1].item].includes(selectionData[0][selectionData[0].length-1].item)){
          setWonUser("It's a tie !!");
        }else if(itemsThatDefeat[selectionData[1][selectionData[1].length-1].item].includes(selectionData[0][selectionData[0].length-1].item)){
          setWonUser(userNames[1]);
        }else{
          setWonUser(userNames[0]);
        }
      }
      setScore(winData)
      console.log(winData)
    },[usersSelection])

    function postOk(){
      setCanPushToGameData(true)
    }

    const postUserDataToFirestore = (data, collectionId) => {
      return new Promise(async(res,rej)=>{
        try {
          const collectionRef = collection(firestore, collectionId);

          const docRef = await addDoc(collectionRef, data);
          res(docRef)
          console.log("Data posted to Firestore with ID:", docRef.id);
        } catch (error) {
          rej(error)
          console.error("Error posting data:", error);
        }
      })
    };
    const getUsersData=(collectionName)=>{
      return new Promise(async(res,rej)=>{
          try {
            const collectionRef = collection(firestore, collectionName);
            const querySnapshot = await getDocs(collectionRef);
            const fetchedData = querySnapshot.docs.map((doc) => doc.data());
            res(fetchedData)
          } catch (error) {
            console.error("Error fetching data:", error);
            rej(error)
          }
      })
    }
    useEffect(()=>{
      if(round>6){
        setTimeout(() => {
          
        let tie = false
        let ordered = Object.keys(score).sort((a,b)=>{
          return score[a] > score[b] ? 1 : -1
        })
        debugger
        if(score["0"] == score["1"]){
            tie= true
        }
        setTotalWinner(tie ? "Both Won !" : userNames[ordered[1]]);
        info(tie ? "Both Won !"  : userNames[ordered[1]]+" won the season !", postOk)
        postUserDataToFirestore({participated : `${userNames[0]} vs ${userNames[1]}` , won : tie ? "Both Won !" : userNames[ordered[1]] }, "rpsWonRecord")
      
        }, 1500);
      }
    },[score])

  return (
    <GameDataContext.Provider value={{isVisibleLandingButton, setIsVisibleLandingButton, usersSelection , setUsersSelection, selections, itemsThatDefeat, expectedSelection, setExpectedSelection, score, round, setRound, wonUser,setWonUser, isUserModalOpen, setIsUserModalOpen, postUserDataToFirestore, userNames , setUserNames, canPushToGameData, getUsersData, count, setCount}}>
      {children}
    </GameDataContext.Provider>
  );
}

export default GameDataContext;
