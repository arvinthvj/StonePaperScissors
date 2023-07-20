import React from "react";
import { motion } from "framer-motion";

const PopInComponent = ({ component }) => {
  return (
    <motion.div
      initial={{ scale: 0 }} // Initial scale of 0 to make the component invisible
      animate={{ scale: 1 }} // Final scale of 1 to pop the component in
      transition={{ duration: 0.3 }} // Duration of the animation in seconds
    >
      {component}
    </motion.div>
  );
};

export default PopInComponent;
