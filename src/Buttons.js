import React from "react";
import "./App.css";

const Buttons = props => {
    return (
        <div>
            <section className="myButtons">
                <div className="extraButtons">
                    <button className="homeButtons__quarter" onClick={()=>props.advanceQuarter()}>Advance Quarter</button>
                </div>
            </section>
            <section className="buttons">
                <div className="homeButtons">
                    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                    <button className="homeButtons__touchdown" onClick={() => props.touchdown(true)}>Home Touchdown</button>
                    <button className="homeButtons__fieldGoal" onClick={() => props.fieldGoal(true)}>Home Field Goal</button>
                </div>
                <div className="awayButtons">
                    <button className="awayButtons__touchdown" onClick={() => props.touchdown(false)}>Away Touchdown</button>
                    <button className="awayButtons__fieldGoal" onClick={() => props.fieldGoal(false)}>Away Field Goal</button>
                </div>
            </section>
        </div>
    );
};

export default Buttons;