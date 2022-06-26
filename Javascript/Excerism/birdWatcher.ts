// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
 export function totalBirdCount(birdsPerDay) {
    return birdsPerDay.reduce((x,y) => x+y)
}
/**
* Calculates the total number of birds seen in a specific week.
*
* @param {number[]} birdsPerDay
* @param {number} week
* @returns {number} birds counted in the given week
*/
export function birdsInWeek(birdsPerDay, week) {
     let weekArray = birdsPerDay.filter((count, day) => (
      day >= (week * 7) - 7 && day <= (week * 7) - 1));
    return weekArray.reduce((x, y) => x + y);
}
/**
* Fixes the counting mistake by increasing the bird count
* by one for every second day.
*
* @param {number[]} birdsPerDay
* @returns {number[]} corrected bird count data
*/
export function fixBirdCountLog(birdsPerDay) {
for(let i = 0; i < birdsPerDay.length; i++){
  if((i + 2) % 2 === 0){
   // finding bird
    birdsPerDay.splice(i, 1, birdsPerDay[i] + 1)
  }
}
return birdsPerDay;
}
