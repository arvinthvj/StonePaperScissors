import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    // Start the countdown when the component mounts
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(timer);
    }
  }, [count]);

  const animationVariants = {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  };

  return (
    <div style={{ fontSize: "48px", textAlign: "center", marginTop: "100px" }}>
      <motion.div
        key={count}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        variants={animationVariants}
      >
        {count === 0 ? "Go!" : count}
      </motion.div>
    </div>
  );
};

export default Countdown;
