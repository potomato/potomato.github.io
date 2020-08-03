import  React, { Component } from "react";
import Target from "./Target"
import ElemCount from './ElemCount'
import getCombinations from './getCombinations'
import filterCombinations from './filterCombinations'
import Results from './Results'
import {Container, Row, Col} from 'react-bootstrap'


interface SolverProps {
}

interface SolverState {
    target: number | null;
    minElems : number;
    maxElems : number;
};

export default class Solver extends Component<SolverProps, SolverState> {

    state: SolverState = {
        target : 20,
        minElems : 1,
        maxElems : 7,
    };

    setTarget = (newTarget : number | null) => {
        if (newTarget) {
            this.setState({
                target: newTarget,
                minElems : 1,
                maxElems : 7,
            });
        } else {
            this.setState({
                target : null,
            });
        }
    }

    setMinElems = (minElems : number) => {
        this.setState({
            minElems : minElems,
            maxElems : Math.max(this.state.maxElems, minElems)
        })
    }

    setMaxElems = (maxElems : number) => {
        this.setState({
            maxElems : maxElems,
            minElems : Math.min(this.state.minElems, maxElems)
        })
    }

    render(){
        return(
            <Container className="Solver">
                <Row className="mainRow"><Col><h1>Sandwich Sudoku Combination Solver</h1></Col></Row>
                <Target targetValue={this.state.target} onChange={this.setTarget}/>
                <ElemCount description="Minimum number of elements is" minValue={1} maxValue={7} currentValue={this.state.minElems} onChange={(i) => this.setMinElems(i)} />
                <ElemCount description="Maximum number of elements is" minValue={1} maxValue={7} currentValue={this.state.maxElems} onChange={(i) => this.setMaxElems(i)} />
                <Results combinations={this.getResults()}/>
            </Container>
        )
    }

    getResults = () : Array<Array<number>> => {
        if (!this.state.target) return [];
        let allCombinations = getCombinations(this.state.target);
        let filteredCombinations =  filterCombinations(allCombinations, this.state.minElems, this.state.maxElems);
        let sortedCombinations = filteredCombinations.sort( (a, b) => {
            if (a.length < b.length) return -1; // shortest first
            return a.join() < b.join() ? -1 : 1; // otherwise by order of elements
        } );
        return sortedCombinations;
    }
}