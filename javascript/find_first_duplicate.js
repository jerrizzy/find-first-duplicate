function findFirstDuplicate(arr) {
  // type your code here
  let result = -1
  
  for (const element of arr) {
    
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/*******************************************************************
 * initialize a variable and set it equal to -1
 * 
 * iterate through an array:
 *  if a duplicate element is found:
 *    add it to the initialized variable
 * and return the new variable
 * otherwise return the original variable
 * 
 */ 
// And a written explanation of your solution
// iterate through an array
// and if a duplicate element is found
// return it, and if none found return -1
