import React from "react";
import "./App.css";

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <section className="myButtons">
                    <div className="extraButtons">
                        <button className="homeButtons__quarter" onClick={()=>this.props.advanceQuarter()}>Advance Quarter</button>
                    </div>
                </section>
                <section className="buttons">
                    <div className="homeButtons">
                        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                        <button className="homeButtons__touchdown" onClick={() => this.props.touchdownHome()}>Home Touchdown</button>
                        <button className="homeButtons__fieldGoal" onClick={() => this.props.fieldGoalHome()}>Home Field Goal</button>
                    </div>
                    <div className="awayButtons">
                        <button className="awayButtons__touchdown" onClick={() => this.props.touchdownAway()}>Away Touchdown</button>
                        <button className="awayButtons__fieldGoal" onClick={() => this.props.fieldGoalAway()}>Away Field Goal</button>
                    </div>
                </section>
            </div>
        );
    }
};

export default Buttons;