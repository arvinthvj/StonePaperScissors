import React from 'react';
import { motion } from 'framer-motion';

const Notification = ({children}) => {
  const notificationTransition = {
    duration: 0.5, // Duration of the transition (in seconds)
    ease: 'easeOut', // Easing function for the transition
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={notificationTransition}
    >
      {children}
    </motion.div>
  );
};

export default Notification;
