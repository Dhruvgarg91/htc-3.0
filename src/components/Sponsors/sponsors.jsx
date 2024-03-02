import React from "react";
import "./sponsors.scss";
// import {Btn} from "../Top-division-components/Top-division-components.jsx";
// import {SOCIALS} from "../../Module/General";

function SponsorsHead() {
  return (
    <div>
      <h1 className="shead" data-aos='fade-right' data-aos-duration='1000' >Sponsors & Partners</h1>
     
      {/* <h2>Meet Our Supporters</h2> */}
      
    </div>
  );
}

function Sponsor(props) {
  return (
    <div className="Sponsor">
     <a href={props.link} rel="noreferrer" target="_blank"> <img src={props.srcx} alt={props.alt} className={props.className}></img></a>
    </div>
  );
}

// function SponsorUS() {
//   return (
//     <div className="joinT sponsorUS">
//       <h3>Interested in Sponsoring </h3>
//       <a href={SOCIALS.email}>
//         <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
//       </a>{" "}
//     </div>
//   );
// }

export {SponsorsHead, Sponsor};
// export {SponsorsHead, Sponsor, SponsorUS};