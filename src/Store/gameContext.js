import React, { createContext, useState } from 'react';
const GameDataContext = createContext();

export function GameDataProvider({ children }) {

    const selections = ["Scissors", "Paper", "Stone"];
    const [isVisibleLandingButton, setIsVisibleLandingButton] = useState(false);
    const [usersSelection , setUsersSelection] = useState({
      ["user1"] : {},
      ["user2"] : {}
    });
  return (
    <GameDataContext.Provider value={{isVisibleLandingButton, setIsVisibleLandingButton, usersSelection , setUsersSelection, selections}}>
      {children}
    </GameDataContext.Provider>
  );
}

export default GameDataContext;
