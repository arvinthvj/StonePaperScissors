import React from 'react'
import LandingText from '../AnimationUtils'
import UpwardComponent from '../AnimationUtils/TransitionCustom/Upwards'
import "./landing.css"
export default function LandingPage() {
  return (
    <UpwardComponent component = {LandingText}/>
  )
}
