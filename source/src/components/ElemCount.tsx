import React from 'react';
import {Row, Col} from 'react-bootstrap'

interface ElemCountProps {
    description : string,
    minValue : number,
    currentValue : number,
    maxValue : number,
    onChange : (newValue:number) => void,
}

const ElemCount: React.FC<ElemCountProps> = (props) => {
  return (
    <Row className="ElemCount mainRow">
      <Col>
        <Row>
          <span>{`${props.description} ${props.currentValue}`}</span>
        </Row>
        <Row>
          <input type="range" min={props.minValue} max={props.maxValue} value={props.currentValue} onChange={(evt) => props.onChange(parseInt(evt.target.value))}></input>
        </Row>
      </Col>
    </Row>
  );
}

export default ElemCount;
