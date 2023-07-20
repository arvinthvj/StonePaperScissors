import React, { useContext, useState } from "react";
import { Row, Col } from "antd";
import "./play.css";
import PopInComponent from "../AnimationUtils/TransitionCustom/Popin";
import ScoreCard from "./ScoreCard";
import "./play.css";
import SlideUpComponent from "../AnimationUtils/TransitionCustom/SlideUp";
import User from "./Users";
import GameDataContext from "../Store/gameContext";
export default function Play() {
  
  let {selections} = useContext(GameDataContext);

  return (
    <div className="main_play">
      <Row className="score_card_row">
        <SlideUpComponent component={ScoreCard} />
      </Row>
      <Row className="main_play_container">
        {Array(2)
          .fill("")
          .map((e, i) => {
            return (
              <Col>
                <PopInComponent component={<User selections={selections} index={i}/>} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
