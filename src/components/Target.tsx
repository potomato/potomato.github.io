import React from 'react';

interface TargetProps {
    targetValue : number,
    onChange : (newTarget:number| null) => void,
}

const Target: React.FC<TargetProps> = (props) => {
  return (
    <div className="Target">
        <div>
        <span>Target is </span><input type="number" min={2} max={35} value={props.targetValue} onChange={(evt) => props.onChange(getIntVal(evt.target.value))}></input>
        </div>
{/*         <div>
            <input type="range" min={2} max={35} value={props.targetValue} onChange={(evt) => props.onChange(getIntVal(evt.target.value))}></input>
        </div>
 */}    </div>
  );
}

function getIntVal(value : string) : number | null {
    var intVal = parseInt(value);

    if (!intVal || intVal < 2 || intVal > 35) return null;

    return intVal;
}

export default Target;
