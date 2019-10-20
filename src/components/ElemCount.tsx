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
        <div>
            {`${props.description} ${props.currentValue}`}
        </div>
        <div>
            <input type="range" min={props.minValue} max={props.maxValue} value={props.currentValue} onChange={(evt) => props.onChange(parseInt(evt.target.value))}></input>
        </div>
    </div>
  );
}

export default ElemCount;
