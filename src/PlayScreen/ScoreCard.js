import { Col, Row } from 'antd'
import React, { useContext } from 'react'
import GameDataContext from '../Store/gameContext';
import "./scorecard.css"
export default function ScoreCard() {
  let {round} = useContext(GameDataContext);  

  return (
    <div className='score_card_main'>
        <Row >
        <Col span={24} className='playerHeader'>
        Round: {round}
        </Col>
        </Row>
    </div>
  )
}
