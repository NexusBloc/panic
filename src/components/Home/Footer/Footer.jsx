import React from "react";
// import './Footer.css'

function Footer() {
  return (
    <div className="containerF">
      <div className="btnF">
        <a href="https://discord.gg" className="panicportalF opensea">
            OpenSea
        </a>
        <a href="#" className="panicportalF discord">D!scord</a>

        <a href="#" className="panicportalF X">X</a>
      </div>
      
      <div className="btnFo">
        <a href="https://discord.gg" className="panicportalF Con">
          About Us
        </a>
        <a href="#" className="panicportalF Con">Contact</a>

        <a href="#" className="panicportalF Con">Q & A</a>
      </div>


      <p className="copywrite">&copy; Hitch2024</p>
    </div>
  );
}

export default Footer;
