import React from 'react';
import Combination from './Combination'

interface ResultsProps {
    combinations: Array<Array<number>>
}

const Results: React.FC<ResultsProps> = (props) => {
  return (
    <div className="Results">
        { props.combinations.map( (comb) => <Combination key={comb.join()} combination={comb} />) }
    </div>
  );
}

export default Results;
