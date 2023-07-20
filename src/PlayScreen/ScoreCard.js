import { Col, Row } from 'antd'
import React from 'react'

export default function ScoreCard() {
  return (
    <div className='score_card_main'>
        <Row >
            <Col  span={12}>
             Player 1: 
            </Col>
            <Col  span={12}>
             Player 2:
            </Col>
        </Row>
    </div>
  )
}
