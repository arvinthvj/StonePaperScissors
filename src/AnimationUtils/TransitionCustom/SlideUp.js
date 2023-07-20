import React from 'react';
import { motion } from 'framer-motion';

const SlideUpComponent = ({component}) => {
  return (
    <motion.div
      initial={{ y: 50 }} // Start position with y offset of 50 pixels (slide down initially)
      animate={{ y: 0 }} // Slide up to the original position
      transition={{ duration: 0.5 }} // Duration of the animation in seconds
    >
     {component()}
    </motion.div>
  );
};

export default SlideUpComponent;
