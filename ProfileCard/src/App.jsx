import "./styles.css";

import React from "react";

function Avatar() {
  return <img className="avatar" src="ceylan.jpg" alt="Ceylan Yıldırım " />;
}

function Intro() {
  return (
    <div>
      <h1 className="title">Ceylan Yıldırım</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪🏽" color="#a78bfa" />
      <Skill skill="JavaScript" emoji="💪🏽" color="#facc15" />
      <Skill skill="HTML+CSS" emoji="💪🏽" color="#60a5fa" />
      <Skill skill="Java" emoji="💪🏽" color="#f87171" />
      <Skill skill="Spring" emoji="🍃" color="#84cc16" />
      <Skill />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;
