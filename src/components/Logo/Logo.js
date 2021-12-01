import React, { useMemo } from "react";
import logoImage from "../../assets/images/nft-logo.svg";
import "./Logo.scss";

const Logo = () => useMemo(() => (
  <>
    <img src={logoImage} className="logo" alt="logo" />
    <h1 className="headline">COTI NFT</h1>
    <h2>FINAL RAFFLE</h2>
  </>
), []);

export default Logo;
