import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function App() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);
  const navigate = useNavigate(); // Correctly use useNavigate hook

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { y: -80, opacity: 1 },
    transition: { delay: 0.5, type: "spring", stiffness: 400 },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { y: -80, opacity: 1 },
    transition: { delay: 0.5, type: "spring", stiffness: 400 },
  };

  useEffect(() => {
    const animation = animate(count, 100, { duration: 5 });

    const unsubscribe = rounded.onChange((latest) => {
      setDisplayValue(latest);
    });

    if (displayValue === 100) {
      const timeoutId = setTimeout(() => {
        navigate("/firstpage");
      }, 2000);

      return () => clearTimeout(timeoutId);
    }

    return () => {
      animation.stop();
      unsubscribe();
    };
  }, [count, rounded, displayValue, navigate]);

  return (
    <div className="h-[100vh] w-[100%] bg-white relative">
      {displayValue < 75 ? (
        <motion.h1
          className="text-black flex justify-center text-7xl font-medium animate-pulse items-center h-[100%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Hi, my name is Younes Zerguine.
        </motion.h1>
      ) : (
        <>
          {displayValue === 100 ? (
            <motion.h1
              className="text-black flex justify-center text-9xl font-medium animate-pulse items-center h-[100%]"
              variants={childVariants}
              initial="hidden"
              animate="visible"
            >
              Let's Go.
            </motion.h1>
          ) : (
            <motion.h1
              className="text-black flex justify-center text-9xl font-medium animate-pulse items-center h-[100%]"
              variants={childVariants}
              initial="hidden"
              animate="visible"
            >
              Welcome.
            </motion.h1>
          )}
        </>
      )}
      <motion.h1 className="text-black font-semibold text-8xl absolute bottom-8 right-10 oswald">
        {displayValue}%
      </motion.h1>
    </div>
  );
}
