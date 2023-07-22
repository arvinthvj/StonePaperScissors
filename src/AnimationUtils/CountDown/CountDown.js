import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import GameDataContext from "../../Store/gameContext";
import UpwardComponent from "../TransitionCustom/Upwards";
import PopInComponent from "../TransitionCustom/Popin";

const Countdown = () => {
  const [count, setCount] = useState(3);
  let { wonUser, setIsVisibleLandingButton, round} = useContext(GameDataContext);
  const [visibleWon, setVisibleWon] = useState(false);
  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if(count == 0){
      setIsVisibleLandingButton(true)
    }
  }, [count]);
  useEffect(()=>{
    if(round>1){
      setVisibleWon(true);
      setTimeout(()=>{
        setVisibleWon(false);
      },1000)
    }
  },[round])
  const animationVariants = {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { y: -100, opacity: 0 }, // Move 100px upwards while fading out
  };
  let Go =()=> "Go";
  return (
    <div style={{ fontSize: "48px", textAlign: "center", marginTop: "100px" }}>
      {visibleWon && <PopInComponent component={<div>{wonUser} {wonUser.includes("tie") ? "": "Won !!"}</div>}/>}
      <motion.div
        key={count}
        className="count_div"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        variants={animationVariants}
      >
        {count === 0 ? <UpwardComponent component={Go}></UpwardComponent>  : count}
      </motion.div>
    </div>
  );
};

export default Countdown;
