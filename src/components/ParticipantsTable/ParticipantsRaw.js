import React, { useMemo } from "react";
import { isAlreadyWon } from "../../utils";

const ParticipantsRaw = ({ participant, index, rafflePrizes, isSelected, winners }) => {
const label = index + 1;

  return useMemo(() => {
    const isWon = isAlreadyWon(participant, winners);
    return (
        <li
          id={`position${label}`}
          key={index}
          className={`participant${isSelected ? " selected" : ""}${isWon? " winner" : ""}`}>
          <div className="participant-data position">
            <span>{label}</span>
          </div>
          <div className="participant-data address">
            <span>{participant}</span>
            { isWon && <span> {rafflePrizes[winners.indexOf(participant)].label} Place</span> }
          </div>
        </li>
    );
    // eslint-disable-next-line
  }, [isSelected, winners]);
};

export default ParticipantsRaw;
