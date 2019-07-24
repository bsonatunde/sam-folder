
// QUESTION III
// Given a non-negative integer, return an array or a list of the individual digits in order.
// Specification
// digitize(n)
// separate multiple digit numbers into an array
// Parameters
// n: Number - Number to be converted
// Return Value
// Array<Number> - Array of separated single digit integers
// Examples
// n	Return Value
// 123	[1,2,3]
// 8675309	[8,6,7,5,3,0,9]

//solution
function digitize(n) {
    var initialArray = (""+n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
      reversedArray[i] = parseInt(initialArray.shift(),10);
    }
    return reversedArray;
  }
  
  console.log(digitize(348597));
