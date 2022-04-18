import './sass/main.scss';
import { Combination } from '../node_modules/js-combinatorics/combinatorics';

const chooseOptimalDistance = (t, k, ls) => {
  let combinations = new Combination(ls, k);
  if (combinations.length !== 0) {
    const totals = [...combinations].map(combination =>
      combination.reduce((distance, acc) => {
        return distance + acc;
      }, 0),
    );
    return Math.max(...totals.sort((a, b) => a - b).filter(totalDistance => totalDistance <= t));
  }
  return null;
};

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null
