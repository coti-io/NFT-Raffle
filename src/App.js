import React, { createContext, useState } from "react";
import "./App.scss";
import Logo from "./components/Logo/Logo";
import Prizes from "./components/Prizes/Prizes";
import ParticipantsTable from "./components/ParticipantsTable/ParticipantsTable";
import ConfettiComponent from "./components/Confetti/ConfettiComponent";

export const WinnersContext = createContext(null);

function App() {
  const [winners, setWinners] = useState([]);

  return (
    <div id="raffleApp" className="RaffleApp">
      <div className="main-wrapper">
        <WinnersContext.Provider value={[winners, setWinners]}>
          <div className="celebration">
            <ConfettiComponent />
          </div>
          <header className="header-wrapper">
            <Logo />
            <Prizes />
          </header>
          <ParticipantsTable />
        </WinnersContext.Provider>
      </div>
    </div>
  );
}

export default App;
