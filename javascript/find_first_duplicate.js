function findFirstDuplicate(arr) {
  // type your code here
  const mySet = new Set()
  result = -1

  for ( i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return arr[i]
    } else {
      mySet.add(arr[i])
    }
  }
  return result 
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
 * initialize an empty set. Set holds only unique elements. No duplicate
 * 
 * iterate through an array:
 *  Check if each element is in the set, if it's not:
 *    add it to the set
 *    if the element is already in the set:
 *  return the element
 * otherwise return the variable equal to -1
 * 
 */
// I use a Set to store all the iterated values.
// A Set is a data structure that holds unique element or values
// I iterate through the array
// check if the value is in the set, if not, add it.
// if the value is already in the set return that value
// otherwise if we go through the array and no duplicate is found
// return -1
