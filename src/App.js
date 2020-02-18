//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);
  const [currentQuarter, setQuarter] = useState(0);

  const touchdown = (homeTeam) => {
    if (homeTeam === true) {
      setLionScore(lionScore + 6);
    }
    else {
      setTigerScore(tigerScore + 6);
    }
  }

  const fieldGoal = (homeTeam) => {
    if (homeTeam === true) {
      setLionScore(lionScore + 3);
    }
    else {
      setTigerScore(tigerScore + 3);
    }
  }

  const advanceQuarter = () => {
    if (currentQuarter < 4) {
      setQuarter(currentQuarter + 1);
    }
    else {
      setQuarter(0);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow currentQuarter={currentQuarter}/>
      </section>
      <Buttons touchdownHome={()=>touchdown(true)} touchdownAway={()=>touchdown(false)} fieldGoalHome={()=>fieldGoal(true)} fieldGoalAway={()=>fieldGoal(false)} advanceQuarter={()=>advanceQuarter()}/>
    </div>
  );
}

export default App;
