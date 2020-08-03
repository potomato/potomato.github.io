import React from 'react';
import {Row, Col} from 'react-bootstrap'

interface TargetProps {
    targetValue : number | null,
    onChange : (newTarget:number| null) => void,
}

const Target: React.FC<TargetProps> = (props) => {
  return (
    <Row className="Target mainRow">
      <Col>
        <span>Target is </span>
        <input type="number" min={2} max={35} value={props.targetValue || undefined} onChange={(evt) => props.onChange(getIntVal(evt.target.value))}></input>
        </Col>
    </Row>
  );
}

function getIntVal(value : string) : number | null {
    var intVal = parseInt(value);

    if (!intVal || intVal < 2 || intVal > 35) return null;

    return intVal;
}

export default Target;
