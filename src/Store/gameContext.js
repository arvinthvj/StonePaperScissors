import React, { createContext, useState } from 'react';
const GameDataContext = createContext();

export function GameDataProvider({ children }) {


    const [isVisibleLandingButton, setIsVisibleLandingButton] = useState(false);

  return (
    <GameDataContext.Provider value={{isVisibleLandingButton, setIsVisibleLandingButton}}>
      {children}
    </GameDataContext.Provider>
  );
}

export default GameDataContext;
