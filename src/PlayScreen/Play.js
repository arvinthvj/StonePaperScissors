import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Space } from "antd";
import PopInComponent from "../AnimationUtils/TransitionCustom/Popin";
import ScoreCard from "./ScoreCard";
import "./play.css";
import SlideUpComponent from "../AnimationUtils/TransitionCustom/SlideUp";
import User from "./Users";
import GameDataContext from "../Store/gameContext";
import Countdown from "../AnimationUtils/CountDown/CountDown";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function Play() {
  let history = useHistory();
  let {selections, canPushToGameData, userNames, setIsVisibleLandingButton} = useContext(GameDataContext);
  useEffect(()=>{
    if(!userNames[0].length && window.location.pathname != "/" ){
      setIsVisibleLandingButton(false)
      history.push("/")
    }
  },[userNames])
  
  useEffect(()=>{
    if(canPushToGameData){
      history.push("/gameData")
    }
  },[canPushToGameData]);
  return (
    <Space wrap className="total_play">
    <div className="game_data"><Link to="/gameData">Game Data</Link></div>
    <div className="main_play">
      <Row className="score_card_row">
        <SlideUpComponent component={ScoreCard} />
      </Row>
      <Row className="main_play_container">
        {Array(3)
          .fill("")
          .map((e, i) => {
            return (
              i==1 ? <Col>
              <Countdown/>
              </Col> : <Col>
              <PopInComponent component={<User selections={selections} index={i==2? 1 :i}/>} />
              </Col>
            );
          })}
      </Row>
    </div>
    </Space>
  );
}
