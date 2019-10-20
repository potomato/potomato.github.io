import React from 'react';

interface TargetProps {
    onChange : (newTarget:number| null) => void,
}

const Target: React.FC<TargetProps> = (props) => {
  return (
    <div className="Target">
        {/* <input type="number" min={2} max={35} onChange={(evt) => props.onChange(getIntVal(evt.target.value))}></input> */}
        <input type="range" min={2} max={35} defaultValue={2} onChange={(evt) => props.onChange(getIntVal(evt.target.value))}></input>
    </div>
  );
}

function getIntVal(value : string) : number | null {
    var intVal = parseInt(value);

    if (!intVal || intVal < 2 || intVal > 35) return null;

    return intVal;
}

export default Target;
