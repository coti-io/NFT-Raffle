import React, { useContext, useEffect, useState, useRef } from "react";
import { WinnersContext } from "../../App";
import { useWindowSize } from "../../hooks/useWindowSize";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const [winners] = useContext(WinnersContext);
  const [isConfettiOn, setIsConfettiOn] = useState(false);
  const { width, height } = useWindowSize();

  const timerOffRef = useRef();

  useEffect(() => {
    if (winners.length) {
      setIsConfettiOn(winners.length);
      timerOffRef.current = setTimeout(() => {
        setIsConfettiOn(false);
      }, 3000);
    }
    return () => {
      if (timerOffRef.current) {
        clearTimeout(timerOffRef.current);
      }
    };
  }, [winners]);

  return isConfettiOn ? (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={1000}
      tweenDuration={3000}
      colors={["#0707FF", "#00ffff", "#ffd500", "#B200FF"]}
      gravity={0.2} />)
      : null;
};

export default ConfettiComponent;
