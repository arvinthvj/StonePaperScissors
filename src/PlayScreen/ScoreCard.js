import { Col, Row } from 'antd'
import React, { useContext } from 'react'
import GameDataContext from '../Store/gameContext';

export default function ScoreCard() {
  let {score} = useContext(GameDataContext);  

  return (
    <div className='score_card_main'>
        <Row >
            <Col  span={12}>
             Player 1: {score[0]}
            </Col>
            <Col  span={12}>
             Player 2:{score[1]}
            </Col>
        </Row>
    </div>
  )
}
