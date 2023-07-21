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
    const [expectedSelection, setExpectedSelection] = useState(0);
    

    useEffect(()=>{
      let selectionData = usersSelection;
      let winData = Object.keys(selectionData).reduce((acc,curr)=>{
        acc[curr] = selectionData[curr].filter((e,i)=>{
          return selectionData[Number(!Number(curr))][i] && itemsThatDefeat[e.item].includes(selectionData[Number(!Number(curr))][i].item)
        }).length
        return acc
      },{});
      console.log(winData)
      setScore(winData);
    },[usersSelection])
  return (
    <GameDataContext.Provider value={{isVisibleLandingButton, setIsVisibleLandingButton, usersSelection , setUsersSelection, selections, itemsThatDefeat, expectedSelection, setExpectedSelection, score}}>
      {children}
    </GameDataContext.Provider>
  );
}

export default GameDataContext;
