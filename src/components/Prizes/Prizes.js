import React, { useContext, useMemo } from "react";
import { WinnersContext } from "../../App";
import { addCommas } from "../../utils";
import rafflePrizes from "../../config/prizes.json";
import "./Prizes.scss";

const Prizes = () => {
  const [winners] = useContext(WinnersContext);

  return useMemo(() => (
    <div className="prizes">
      {rafflePrizes.map(({label, prize}, idx) => (
        <div className="prize-wrapper" key={`${label}-${idx}`}>
          <h2 className="position">{label}</h2>
          <div className={`winner${winners[idx] ? " active" : ""}`}>
            {!!winners.length ? <span>{winners[idx]}</span> : <span>Wins</span>}
          </div>
          <div className="prize">
            <h3 className="value">{addCommas(prize)}</h3>
            COTI
          </div>
          <div className={`hex${winners[idx] ? " active" : ""}`} />
        </div>
      ))}
    </div>
  ), [winners]);
};

export default Prizes;