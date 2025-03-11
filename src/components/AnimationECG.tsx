import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity, // Repite la animación infinitamente
      repeatType: "loop" as const, // Aseguramos que sea un valor válido ("loop")
    },
  },
};

function AnimatedECG() {
  return (
    <div style={styles.container}>
      <svg width="100%" height="200px" viewBox="0 0 400 100" style={styles.svg}>
        <motion.path
          d="M10 50 
                       L30 50 
                       L40 30 
                       L50 70 
                       L60 50 
                       L80 50 
                       L90 20 
                       L100 80 
                       L110 50 
                       L130 50
                       L140 40
                       L150 50
                       L160 60
                       L170 50
                       L190 50
                       L200 30
                       L210 70
                       L220 50
                       L240 50
                       L250 40
                       L260 50
                       L270 60
                       L280 50
                       L300 50
                       L310 20
                       L320 80
                       L330 50
                       L350 50
                       L360 30
                       L370 70
                       L380 50
                       L400 50"
          stroke="red"
          strokeWidth="4"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100px",
    background: "transparent",
  },
  svg: {
    width: "100%",
    height: "100%",
  },
};

export default AnimatedECG;
