import React from "react";
import { LogoSVG } from "../../Resources/UniversalComponents";
import {
  alwaysBlack,
  alwaysWhite,
  darkGreyColor,
  mediumGreyColor,
} from "../../Styles/Styles";

interface AppFooterIn  {
  see:boolean
}
export default function AppFooter({see}:AppFooterIn) {
 
  const myLogo = LogoSVG(darkGreyColor(), mediumGreyColor(), 1.3);
  return (
    <footer
      className="footer no-print"
      style={{
        display: see ? "flex" : "none",
        fontSize: "12px",
        backgroundColor: alwaysWhite(),
        color: alwaysBlack(),
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0.5rem",
        width: "100%",
      }}
    >
        <img
        src="https://ik.imagekit.io/vjz75qw96/assets/icons/sight.png"
        alt="Sight 7 Logo"
        style={{ maxWidth: 180, marginBottom: 16 }}
      />  
    </footer>
  );
}
