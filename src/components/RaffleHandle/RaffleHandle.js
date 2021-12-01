import React, { useMemo, useState, useRef, useEffect } from "react";
import "./RaffleHandle.scss";

const RaffleHandle = ({ startRaffleHandler }) => {
  const [isActive, setIsActive] = useState(false);
  const handleRef = useRef();

  const handleClick = () => {
    setIsActive(true);
    startRaffleHandler();
  };

  useEffect(() => {
    handleRef.current = setTimeout(function () {
      setIsActive(false);
    }, 500);
    return () => {
      clearTimeout(handleRef.current);
    }
  }, [isActive])

  return useMemo(() => (
    <div 
      id="handle"
      className={`raffle-handle ${isActive ? " active" : ""}`}
      onClick={()=> !isActive && handleClick() }
      >
        <div className="handle-top" />
    </div> //eslint-disable-next-line
  ), [isActive, startRaffleHandler]);
};

export default RaffleHandle;