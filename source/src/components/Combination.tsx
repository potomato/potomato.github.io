import React from 'react';
import {Row, Col} from 'react-bootstrap'

interface CombinationProps {
    combination: Array<number>
}

const Combination: React.FC<CombinationProps> = (props) => {
  return (
    <Row className="Combination">
{/*       <Col xs={2}></Col> */}
      <Col xs={9}>{props.combination.join(" + ")}</Col>
      <Col xs={3} className="HideCol">
        <span>Hide</span>
        <input type="checkbox"></input>
      </Col>
    </Row>
  );
}

export default Combination;
