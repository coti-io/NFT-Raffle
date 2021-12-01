import React, { useContext, useRef, useState, useEffect } from "react";
import { WinnersContext } from "../../App";
import rafflePrizes from "../../config/prizes.json";
import "./ParticipantsTable.scss";
import ParticipantsRaw from './ParticipantsRaw';
import { scrollToElement, isAlreadyWon } from "../../utils";
import participants from "../../static/data/participants.json";
import RaffleHandle from "../../components/RaffleHandle/RaffleHandle";

const ParticipantsTable = () => {
  const [winners, setWinners] = useContext(WinnersContext);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const selectionTimerRef = useRef();
  const currentRound = winners.length <= 2 ? winners.length : 2;
  
  const exludeWinners = (participants) => { // Exclude winners from next round
    let newParticipants = [];
    for (let i = 0; i < participants.length; i++) {
      if (!isAlreadyWon(participants[i], winners)) newParticipants.push(participants[i]);
    }
    return newParticipants;
  };
  
  const getWinner = (participants) => participants[Math.floor(Math.random() * participants.length)]; // Get random winner from participants list

  const raffleAnimation = (filteredParticipants) => { // Raffle Animation
    let i = 0;
    selectionTimerRef.current = setInterval(() => {
      if (i < filteredParticipants.length) {
        i++
        setSelectedParticipant(i);
        scrollToElement(`position${i}`)
      } else {
        i = 0;
      }
    }, 30);
  }

  useEffect(() => {
    if (!winners) return;
    clearInterval(selectionTimerRef.current);
    setSelectedParticipant(null);
    return () => {
      if (selectionTimerRef.current) {
        clearTimeout(selectionTimerRef.current);
      }
    };
  }, [winners]);
  
  const startRaffleHandler = () => { // Start Raffle Click Handler
    const filteredParticipants = exludeWinners(participants[currentRound]); // Exlude Previous Winners
    raffleAnimation(filteredParticipants); // Start Raffle Animation
    setTimeout(() => {
      const winner = getWinner(filteredParticipants);
      setWinners(winners.concat([winner])); // Set Winner
    }, 5000);
  };

  return (
    <div className="participants-wrapper">
      <div className="raffle-wrapper">
        <div className="raffle-frame" />
        <div className="raffle-handle-wrapper">
            <RaffleHandle startRaffleHandler={()=> winners.length < 3 && startRaffleHandler() }/>
        </div>
        <ul className="participant-list">
          {participants[currentRound].map((participant, index) => (
              <ParticipantsRaw
                key={index}
                participant={participant}
                index={index}
                rafflePrizes={rafflePrizes}
                isSelected={selectedParticipant === index + 1}
                winners={winners} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ParticipantsTable;