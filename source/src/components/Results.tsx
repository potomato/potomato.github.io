import React from 'react';
import Combination from './Combination'
import {Row, Col} from 'react-bootstrap'

interface ResultsProps {
    combinations: Array<Array<number>>
}

const Results: React.FC<ResultsProps> = (props) => {
  return (
    <Row className="Results mainRow">
      <Col>
        { props.combinations.map( (comb) => <Combination key={comb.join()} combination={comb} />) }
      </Col>
    </Row>
  );
}

export default Results;
