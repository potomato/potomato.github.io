
export default function filterCombinations(allCombinations: Array<Array<number>>, 
    minElems:number, maxElems:number) : Array<Array<number>> {
    return allCombinations.filter( (comb) => comb.length >= minElems && comb.length <= maxElems);
}