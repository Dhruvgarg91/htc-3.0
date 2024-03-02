import React, { useState } from "react";
import "./team.css";
import { Btn } from "../Top-division-components/Top-division-components.jsx";

function JoinTeam({ placeholder, formLink, content }) {
  return (
    <div className="joinT">
      <h3>{content}</h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
}

function Member({ info }) {
  const { github, role, Name, img, linkedin } = info;
  return (
    <div className="member">
      <img src={img} alt="Member"></img>
      <div className="members-link">
        <h3>{Name}</h3>
        <p>{role}</p>
        <a href={github} rel="noreferrer" target="_blank">
          <i className="fab fa-2x fa-github bk-col"></i>
        </a>
        <a href={linkedin} rel="noreferrer" target="_blank">
          <i className="fab fa-2x fa-linkedin bk-col"></i>
        </a>
      </div>
    </div>
  );
}

function MembersList({ members }) {
  const [showAll, setShowAll] = useState(false);
  const displayMembers = showAll ? members : members.slice(0, 4); // Change 4 to 5 if you want to show 5 members initially

  return (
    <div>
      {displayMembers.map((member, index) => (
        <Member key={index} info={member} />
      ))}
      {members.length > 4 && ( // Change 4 to 5 if needed
        <button className="see-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}

export { Member, JoinTeam, MembersList };
