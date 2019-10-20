import  React, { Component } from "react";
import Target from "./Target"
import getCombinations from './getCombinations'
import filterCombinations from './filterCombinations'


interface SolverProps {
}

interface SolverState {
    target: number | null;
    minElems : number;
    maxElems : number;
};

export default class Solver extends Component<SolverProps, SolverState> {

    state: SolverState = {
        target : null,
        minElems : 1,
        maxElems : 7,
    };

    setTarget = (newTarget : number | null) => {
        this.setState({
            target: newTarget,
            minElems : 1,
            maxElems : 7,
        });
    }

    setMinElems = (minElems : number) => {
        this.setState({
            minElems : minElems
        })
    }

    setMaxElems = (maxElems : number) => {
        this.setState({
            maxElems : maxElems
        })
    }

    render(){
        return(
            <div>
                <h1>Solver</h1>
                <Target onChange={this.setTarget}/>
                <div>
                    Target now is: {this.state.target}
                </div>
                <input type="range" min={1} max={7} value={this.state.minElems.toString()} onChange={(evt) => this.setMinElems(parseInt(evt.target.value))}></input>
                <div>Min elems: {this.state.minElems}</div>
                <input type="range" min={1} max={7} value={this.state.maxElems.toString()} onChange={(evt) => this.setMaxElems(parseInt(evt.target.value))}></input>
                <div>Max elems: {this.state.maxElems}</div>
                <div>
                    { this.getResults().map( (comb) => <div>{comb.join(" + ")}</div>) }
                </div>
            </div>
        )
    }

    getResults = () : Array<Array<number>> => {
        if (!this.state.target) return [];

        let allCombinations = getCombinations(this.state.target);

        let filteredCombinations = filterCombinations(allCombinations, this.state.minElems, this.state.maxElems);

        return filteredCombinations;
    }
}