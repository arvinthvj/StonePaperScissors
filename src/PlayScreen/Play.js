import React, { useContext, useState } from "react";
import { Row, Col, Space } from "antd";
import "./play.css";
import PopInComponent from "../AnimationUtils/TransitionCustom/Popin";
import ScoreCard from "./ScoreCard";
import "./play.css";
import SlideUpComponent from "../AnimationUtils/TransitionCustom/SlideUp";
import User from "./Users";
import GameDataContext from "../Store/gameContext";
import Countdown from "../AnimationUtils/CountDown/CountDown";
export default function Play() {
  
  let {selections} = useContext(GameDataContext);

  return (
    <Space wrap>
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
