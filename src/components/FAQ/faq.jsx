import React from "react";
import "./faq.css";
import Accordion from "./Accordion";
//import { frequentlyAskedQuestions } from '../../Module/General'
//import faq from './faq.png'
const Faq = () => {
  const accordionData = [
    {
      title: "What is a hackathon?",
      content: `Hackathon is a tool to drive sustained innovation and crowdsource solutions to address pressing real-life business problems and social issues!`,
    },
    {
      title: "Who can attend?",
      content: `Anyone is welcome to participate in this event. While experience in coding and programming is a huge plus, teams will also need individuals with strong presentation skills and brilliant ideas!`,
    },
    {
      title: " I am a first time hacker, what should I do?",
      content: `Welcome aboard, first-time hackers! Dive into the hacking world at our hackathon. Engage in dynamic workshops and events to kickstart your journey. Let's learn, hack, and have a great time together!`,
    },
    {
      title: " How team formation works?",
      content: `You can form a team with a maximum of 4 members. If you don't have a team, there will be plenty of opportunities for you to meet hackers and form a team.`,
    },
    {
      title: "How teams will be judged?",
      content: `There will be a preliminary round of judging in which teams will present their solutions. Only teams that are successful in this preliminary round will proceed to present to the larger group in the final round.`,
    },
    {
      title: "Will there be swag?",
      content: `Yes! Participants will be receiving swag!. 😎`,
    },
  ];

  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
