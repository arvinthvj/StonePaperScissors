import React, { createContext, useEffect, useState } from 'react';
const GameDataContext = createContext();

export function GameDataProvider({ children }) {

    const selections = ["Scissors", "Paper", "Stone"];
    const itemsThatDefeat = {
      Scissors: ["Paper", "Scissors"],
      Paper: ["Stone", "Paper"],
      Stone: ["Scissors", "Stone"],
    };
    const [isVisibleLandingButton, setIsVisibleLandingButton] = useState(false);
    const [score, setScore] = useState({0: 0, 1 : 0});
    const [usersSelection , setUsersSelection] = useState({
      [0] : [],
      [1] : [],
    });
    const [ round, setRound] = useState(1);
    const [expectedSelection, setExpectedSelection] = useState(0);
    const [wonUser , setWonUser] = useState(0);

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
          console.log("Both Won");
          setWonUser(-1);
        }else if(itemsThatDefeat[selectionData[1][selectionData[1].length-1].item].includes(selectionData[0][selectionData[0].length-1].item)){
          console.log("won 1");
          setWonUser(1);
        }else{
          console.log("won 0")
          setWonUser(0);
        }
      }
      setScore(winData)
      console.log(winData)
    },[usersSelection])
  return (
    <GameDataContext.Provider value={{isVisibleLandingButton, setIsVisibleLandingButton, usersSelection , setUsersSelection, selections, itemsThatDefeat, expectedSelection, setExpectedSelection, score, round, setRound, wonUser}}>
      {children}
    </GameDataContext.Provider>
  );
}

export default GameDataContext;
