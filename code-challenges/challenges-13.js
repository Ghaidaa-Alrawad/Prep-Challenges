'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of objects, count the objects by using reduce method.

// Input:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//
// Output: 5

const objectCounter = (obj) => {
    // write your code here
     // write your code here
     return obj.reduce((count) => count + 1, 0);
     // return obj.reduce((count, currentVal) => count + 1, 0); // or this is the solution ig :>
     //but in the 2 ways the output is the same????, and in the 2nd way we are not using the currentVal 
     // wallah my brain isn't braining 

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Given a string input as an argument reverse it using reduce method.
//
// Input: 'you shall not pass' 
// Output: 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    // write your code here
    return str.split(' ').reduce((reversed, word) => word + ' ' + reversed, '').trim();

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
// 
// Using the same array of objects from the first question, create new object that contains the candidates names as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//

const statistics = (obj) => {
    // write your code here
    return obj.reduce((result, current) => {
        // assigning the value of the votesVal
        // property of the current object to the variable candidate
        const candidate = current['votes_To'];
        //hasOwnProperty is a built-in method in js to check if a spicific name is there or not 
        if (result.hasOwnProperty(candidate)) {
          result[candidate] += 1;
        } else {
          result[candidate] = 1;
        }
        return result;
    }, {}); //the empty object is passed as the initial value foe the result parameter in the reduce
    //determin the starting point for the reduction
}
// -------------------------------------------------------------------------------------------------------


module.exports = { objectCounter, stringReverse, statistics };