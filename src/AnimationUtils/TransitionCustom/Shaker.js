import React from 'react';
import { motion } from 'framer-motion';

const WavingPlacard = ({component}) => {
  const placardVariants = {
    waving: {
      rotate: [0, -10, 10, -10, 0], // Alternating rotation to create a waving effect
      x: [0, 5, -5, 5, 0], // Alternating horizontal positions to create a waving effect
      y: [0, -5, 5, -5, 0], // Alternating vertical positions to create a waving effect
    },
  };

  return (
    <motion.div
      variants={placardVariants}
      initial="waving"
      animate="waving"
      transition={{
        duration: 1.5, // Duration of the animation in seconds
        ease: "easeInOut", // Easing function for a smooth wave effect
        repeat: Infinity, // Repeat the animation infinitely
      }}
      style={{
        display: 'inline-block', // Ensure the placard takes up only as much space as necessary
        // background: 'blue', // Set the placard background color (replace with your design)
        color: 'white', // Set the placard text color (replace with your design)
        padding: '8px', // Add padding for spacing (replace with your design)
        fontSize: '24px', // Set the font size of the text (replace with your design)
        transformOrigin: 'bottom center', // Set the origin to the bottom center for waving effect
      }}
    >
      {component}
    </motion.div>
  );
};

export default WavingPlacard;
