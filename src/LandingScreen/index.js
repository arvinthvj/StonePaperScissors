import React from "react";
import LandingText from "../AnimationUtils";
import UpwardComponent from "../AnimationUtils/TransitionCustom/Upwards";
import "./landing.css"
import UserInput from "../Modal/UserInputModal";
export default function LandingPage() {
  return (
    <div className="game_app_landing">
      <UpwardComponent component={LandingText} />
      <UserInput/>
    </div>
  );
}
