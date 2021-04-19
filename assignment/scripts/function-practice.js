console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // End hello
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return `Hello, ${name}!`; // Returns a string including the called value
} // End helloName
console.log('Checking our hello function for Dane:', helloName( 'Dane' ));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
} // end addNumbers
console.log('Checking our addition function for 13 and 26:', addNumbers(13,26));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
} // End multiplyThree
console.log('Testing our three number multiplier for 3, 4, and 5:', multiplyThree(3,4,5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } // Finding positive non-zero numbers
  else {
    return false;
  } // Finding negative numbers and 0, could have been done as an else if
    // ( number <= 0) as instead.
}// End isPositive

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1];
} // end getLast
let blankArray = [];
let testArray1 = [1, 2, 3, 4];
let testArray2 = ['Five', 'Six', 'Seven', true];

console.log('Testing getLast, should return undefined:', getLast(blankArray));
console.log('Testing getLast, should return 4:', getLast(testArray1));
console.log(`Testing getLast, should return 'Seven':`, getLast(testArray2));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  let truthCheck; // Placeholder variable for later
  for (i=0; i<array.length; i++) {
    if (value === array[i]) {
      truthCheck =true;
      break; // As soon as we've found a value there's no need to continue the loop
    } // Sets truthCheck to true if a value is found
    else {
      truthCheck =false;
    } // Sets truthCheck to false before continuing the loop to check remaining array
  } // end loop
  if (truthCheck === true) {
    return true;
  } // Returns true if a value was found and loop was broken
  else {
    return false;
  } // Returns false if value was never found
} // end find

console.log('Testing find, should return true:', find(3, testArray1) );
console.log('Testing find, should return true:', find('Six', testArray2) );
console.log('Testing find, should return false', find(5, testArray1) );
console.log('Testing find, should return false', find(false, testArray2) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
