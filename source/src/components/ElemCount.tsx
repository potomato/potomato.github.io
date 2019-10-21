import React from 'react';

interface ElemCountProps {
    description : string,
    minValue : number,
    currentValue : number,
    maxValue : number,
    onChange : (newValue:number) => void,
}

const ElemCount: React.FC<ElemCountProps> = (props) => {
  return (
    <div className="ElemCount">
      <span>{`${props.description} ${props.currentValue}`}</span>
      <input type="range" min={props.minValue} max={props.maxValue} value={props.currentValue} onChange={(evt) => props.onChange(parseInt(evt.target.value))}></input>
    </div>
  );
}

export default ElemCount;
