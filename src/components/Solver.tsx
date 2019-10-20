import  React, { Component } from "react";
import Target from "./Target"
import getCombinations from './getCombinations'

interface SolverProps {
}

interface SolverState {
    target: number | null;
};

export default class Solver extends Component<SolverProps, SolverState> {
    state: SolverState = {
        target : null,
    };

    changeStatus = () => {
        this.setState({
            //target: (!this.state.target)
        });
    }

    setTarget = (newTarget : number | null) => {
        this.setState({
            target: newTarget
        });
    }

    render(){
        return(
            <div>
                <h1>Solver</h1>
                <Target onChange={this.setTarget}/>
                <div>
                    Target now is: {this.state.target}
                </div>
                <div>
                    { (this.state.target ?  getCombinations(this.state.target) : []).map( (comb) => <div>{comb.join(" + ")}</div>) }
                </div>
            </div>
        )
    }
}