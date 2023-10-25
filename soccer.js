
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
function getTotalPoints(inputString) {
  // Calculate a total Sum
  let total = 0;
  // Convert the string to an array
  stringArray = inputString.split("");
  stringArray.forEach((item)=>{
    total += RESULT_VALUES[item];
  })
  return total;

}


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"
function orderTeams(){
  // From the instructions:
  // Use arguments variable in orderResults function to get all of the arguments.
  // Use Array.from(arguments) to convert the arguments object to an array
  const args = Array.from(arguments);
  args.forEach((item)=>{
    let points = getTotalPoints(item.results);
    let name = item.name;
    console.log(`${name}: ${points}`);
  })
}


// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4