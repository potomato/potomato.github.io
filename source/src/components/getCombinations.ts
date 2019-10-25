
export default function getCombinations(target: number) : Array<Array<number>> {
    var results : Array<Array<number>> = [];
    const options = [2,3,4,5,6,7,8];
    subsetSum(options, target, [], results)
    return results;
}

function subsetSum(numbers : Array<number>, target : number, partial : Array<number>, results : Array<Array<number>> ) {
    // sum partial
    let partialSum = partial.reduce((a, b) => a+b, 0);
  
    // check if the partial sum is equals to target
    if (partialSum === target) {
      //console.log("%s=%s", partial.join("+"), target)
      results.push(partial);
    }
  
    if (partialSum >= target) {
      return;  // if we reach the number why bother to continue
    }
  
    for (var i = 0; i < numbers.length; i++) {
      let n = numbers[i];
      let remaining = numbers.slice(i + 1);
      subsetSum(remaining, target, partial.concat([n]), results);
    }
}
