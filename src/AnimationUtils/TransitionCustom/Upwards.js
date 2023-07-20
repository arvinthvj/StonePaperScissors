import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import GameDataContext from '../../Store/gameContext';

const UpwardComponent = ({component}) => {
  
    let { isVisibleLandingButton } = useContext(GameDataContext);
  

  return (
    <motion.div
      initial={{ y: 0 }} // The initial position of the component (normal position)
      animate={{ y: isVisibleLandingButton ? -1000 : 0 }} // Move the component 100px upwards when isVisible is false
      exit={{ y: -100 }} // Animate the component upwards and hide it when exiting
      transition={{ duration: 0.5 }} // Duration of the animation in seconds
    >
      {component()}
    </motion.div>
  );
};

export default UpwardComponent;
