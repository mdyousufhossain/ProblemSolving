// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
 export function timeToMixJuice(name) {
    switch(name){
      case 'Pure Strawberry Joy':
        return 0.5
      break;
      case 'Energizer':
        return 1.5
        break
      case 'Green Garden':
        return 1.5
      break;
      case 'Tropical Island':
        return 3
      break;
      case 'All or Nothing':
        return 5 
      break;
      default:
        return 2.5
    }
}

/**
* Calculates the number of limes that need to be cut
* to reach a certain supply.
*
* @param {number} wedgesNeeded
* @param {string[]} limes
* @returns {number} number of limes cut
*/
export function limesToCut(wedgesNeeded, limes) {
let wedgesCut = 0,
     limesCut = 0;
let limeValues = limes.reduce((acc, lime) => {
  if(lime === 'small'){ acc.push(6)};
  if(lime === 'medium'){ acc.push(8)};
  if(lime === 'large'){ acc.push(10)};
  return acc;
  }, []);
while(wedgesCut < wedgesNeeded && limeValues.length > limesCut){
  wedgesCut += limeValues[limesCut];
  limesCut++;
}
return limesCut;

}

/**
* Determines which juices still need to be prepared after the end of the shift.
*
* @param {number} timeLeft
* @param {string[]} orders
* @returns {string[]} remaining orders after the time is up
*/
export function remainingOrders(timeLeft, orders) {
let timeAvail = timeLeft;
while(timeAvail > 0){
  timeAvail -= timeToMixJuice(orders.shift());
}
return orders;
}
