import React from 'react';

interface CombinationProps {
    combination: Array<number>
}

const Combination: React.FC<CombinationProps> = (props) => {
  return (
    <div className="Combination">
        {props.combination.join(" + ")}
    </div>
  );
}

export default Combination;
