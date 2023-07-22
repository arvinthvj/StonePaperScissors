import React, { useContext, useEffect } from 'react'
import UserTable from '../DataComponents/UserTable'
import "./gamerdata.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import GameDataContext from '../Store/gameContext';
export default function () {
  let history = useHistory();
  let {userNames, setIsVisibleLandingButton} = useContext(GameDataContext);
  useEffect(()=>{
    if(!userNames[0].length && window.location.pathname != "/" ){
      setIsVisibleLandingButton(false)
      history.push("/")
    }
  },[userNames])
  
  return (
    <div className='game_data_main'>
        <UserTable/>
    </div>
  )
}
