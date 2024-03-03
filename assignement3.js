

// Write a function curry that takes a function and curried arguments and returns a new function that can take the remaining arguments.


// function curry(func, ...args) {
//     return function curried(...moreArgs) {
//         const allArgs = args.concat(moreArgs);
//         if (allArgs.length >= func.length) {
//             return func(...allArgs);
//         } else {
//             return curry(func, ...allArgs);
//         }
//     };
// }


// function add(x, y, z) {
//     return x + y + z;
// }

// const curriedAdd = curry(add, 1);
// console.log(curriedAdd(2, 3)); 
// console.log(curriedAdd(2)(3));   
// console.log(curriedAdd(2, 3, 4)); 





// Implement a function deepFlatten that takes a deeply nested array and flattens it.


// function deepFlatten(arr) {
//     return arr.reduce((acc, val) => {
//         if (Array.isArray(val)) {
//             return acc.concat(deepFlatten(val));
//         } else {
//             return acc.concat(val);
//         }
//     }, []);
// }

// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(deepFlatten(nestedArray));



// Create a debounce function that limits the execution of a function call and waits for a certain amount of time before running it again.


// function debounce(func, delay) {
//     let timeoutId;
    
//     return function(...args) {
//         const context = this;
        
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(context, args);
//         }, delay);
//     };
// }

// function processInput(input) {
//     console.log("Processing input:", input);
// }

// const debouncedProcessInput = debounce(processInput, 500);


// debouncedProcessInput("First");
// debouncedProcessInput("Second");
// debouncedProcessInput("Third");





// Write a throttle function that ensures a given function is only called at most once in a specified time period.


// function throttle(func, delay) {
//     let lastCallTime = 0;
    
//     return function(...args) {
//         const context = this;
//         const currentTime = Date.now();
        
//         if (currentTime - lastCallTime >= delay) {
//             func.apply(context, args);
//             lastCallTime = currentTime;
//         }
//     };
// }


// function processInput(input) {
//     console.log("Processing input:", input);
// }

// const throttledProcessInput = throttle(processInput, 500);


// throttledProcessInput("First");
// throttledProcessInput("Second");
// throttledProcessInput("Third");




// 
// Write a function chunk that splits an array into subarrays of specified length.


// // function chunk(array, size) {
// //     const chunks = [];
// //     for (let i = 0; i < array.length; i += size) {
// //         chunks.push(array.slice(i, i + size));
// //     }
// //     return chunks;
// // }

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // const chunkedArray = chunk(arr, 3);
// // console.log(chunkedArray); 





// // Create a function deepEqual that compares two values deeply, checking if they are equal in value and structure.


// function deepEqual(a, b) {
//     if (a === b) {
//         return true;
//     }

//     if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
//         return false;
//     }

//     const keysA = Object.keys(a);
//     const keysB = Object.keys(b);

//     if (keysA.length !== keysB.length) {
//         return false;
//     }

//     for (let key of keysA) {
//         if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
//             return false;
//         }
//     }

//     return true;
// }

// :
// const obj1 = {a: {b: 1}, c: 2};
// const obj2 = {a: {b: 1}, c: 2};
// const obj3 = {a: {b: 2}, c: 2};

// console.log(deepEqual(obj1, obj2)); 
// console.log(deepEqual(obj1, obj3)); 




// Implement your own bind function that replicates the functionality of JavaScript's native Function.prototype.bind.




// function bind(func, context, ...args) {
//     return function(...innerArgs) {
//         return func.apply(context, args.concat(innerArgs));
//     };
// }


// const obj = {
//     name: 'John',
//     greet: function(message) {
//         console.log(message + ', ' + this.name);
//     }
// };

// const boundFunc = bind(obj.greet, obj, 'Hello');
// boundFunc(); 

// const boundFunc2 = bind(obj.greet, { name: 'Alice' }, 'Hi');
// boundFunc2(); 




//  8   Write a function unique that returns a new array with only the unique elements from the original array.



// function unique(array) {
//     const uniqueArray = [];
    
//     for (let element of array) {
//         if (!uniqueArray.includes(element)) {
//             uniqueArray.push(element);
//         }
//     }
    
//     return uniqueArray;
// }


// const originalArray = [1, 2, 3, 4, 3, 2, 1];
// const uniqueArray = unique(originalArray);
// console.log(uniqueArray);





//  9   Implement a function intersection that finds the intersection of two arrays, returning an array with elements that appear in both.



// function intersection(array1, array2) {
//     const set1 = new Set(array1);
//     const intersectionArray = [];
    
//     for (let element of array2) {
//         if (set1.has(element)) {
//             intersectionArray.push(element);
//         }
//     }
    
//     return intersectionArray;
// }


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// const intersectingElements = intersection(array1, array2);
// console.log(intersectingElements); 



// 10    Write a custom filter function that mimics the behavior of the native Array.prototype.filter method.
// function customFilter(array, callback) {
//     const filteredArray = [];
    
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             filteredArray.push(array[i]);
//         }
//     }
    
//     return filteredArray;
// }


// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = customFilter(numbers, function(element) {
//     return element % 2 === 0;
// });
// console.log(evenNumbers); 




// 11   Create your own version of the reduce method called myReduce that mimics the behavior of the native Array.prototype.reduce.



// function myReduce(array, callback, initialValue) {
//     let accumulator = initialValue !== undefined ? initialValue : array[0];
//     const startIndex = initialValue !== undefined ? 0 : 1;
    
//     for (let i = startIndex; i < array.length; i++) {
//         accumulator = callback(accumulator, array[i], i, array);
//     }
    
//     return accumulator;
// }


// const numbers = [1, 2, 3, 4, 5];
// const sum = myReduce(numbers, function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum); 







// 12   Write a function permute that returns all possible permutations of the elements in an array.


// function permute(array) {
//     const result = [];
    
//     function generatePermutations(currentPerm, remainingArray) {
//         if (remainingArray.length === 0) {
//             result.push(currentPerm);
//             return;
//         }
        
//         for (let i = 0; i < remainingArray.length; i++) {
//             const newArray = remainingArray.slice();
//             const newPerm = currentPerm.concat(newArray.splice(i, 1));
//             generatePermutations(newPerm, newArray);
//         }
//     }
    
//     generatePermutations([], array);
//     return result;
// }


// const inputArray = [1, 2, 3];
// const permutations = permute(inputArray);
// console.log(permutations);






// 13    Implement a function rotateArray that rotates an array to the right by a given number of steps.




// function rotateArray(array, steps) {
//     const rotatedArray = [];
//     const len = array.length;
//     steps = steps % len; 

//     for (let i = 0; i < len; i++) {
//         const newIndex = (i + steps) % len;
//         rotatedArray[newIndex] = array[i];
//     }

//     return rotatedArray;
// }


// const originalArray = [1, 2, 3, 4, 5];
// const stepsToRotate = 2;
// const rotatedArray = rotateArray(originalArray, stepsToRotate);
// console.log(rotatedArray); 




// 14    Write a function isBalanced that takes a string containing only parentheses and checks if they are balanced


// function isBalanced(str) {
//     const stack = [];
//     const openingBrackets = ['(', '[', '{'];
//     const closingBrackets = [')', ']', '}'];

//     for (let char of str) {
//         if (openingBrackets.includes(char)) {
//             stack.push(char);
//         } else if (closingBrackets.includes(char)) {
//             const lastOpenedBracket = stack.pop();
//             if (!lastOpenedBracket || openingBrackets.indexOf(lastOpenedBracket) !== closingBrackets.indexOf(char)) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }

// console.log(isBalanced("()")); 
// console.log(isBalanced("({})")); 
// console.log(isBalanced("([])")); 
// console.log(isBalanced("([)]")); 
// console.log(isBalanced("((())")); 




// 15    Create a function mergeIntervals that merges all overlapping intervals in an array of interval pairs.
// function mergeIntervals(intervals) {
//     if (intervals.length <= 1) {
//         return intervals;
//     }

//     intervals.sort((a, b) => a[0] - b[0]);

//     const mergedIntervals = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         const currentInterval = intervals[i];
//         const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

//         if (currentInterval[0] <= lastMergedInterval[1]) {
//             lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
//         } else {
//             mergedIntervals.push(currentInterval);
//         }
//     }

//     return mergedIntervals;
// }


// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// const merged = mergeIntervals(intervals);
// console.log(merged); 




// 16     Implement a function nestedSum that calculates the sum of all numbers in a nested array, regardless of how deep the array i


// function nestedSum(arr) {
//     let sum = 0;

//     for (let element of arr) {
//         if (Array.isArray(element)) {
//             sum += nestedSum(element); 
//         } else if (typeof element === 'number') {
//             sum += element; \
//         }
//     }

//     return sum;
// }


// const nestedArray = [1, 2, [3, 4, [5, 6]], [7, [8, 9]]];
// console.log(nestedSum(nestedArray)); 



// 17   Implement a function calcLetters that calculates and resturns the sum of all repeated characters in an strings.
// Ex: input  => "Apple"
// outout => {"A":1, "e":1, "l":1, "p":





// function calcLetters(str) {
//     const letterCount = {};

//     for (let char of str) {
//         const lowerCaseChar = char.toLowerCase();
//         if (letterCount[lowerCaseChar]) {
//             letterCount[lowerCaseChar]++;
//         } else {
//             letterCount[lowerCaseChar] = 1;
//         }
//     }

//     const repeatedLetters = {};
//     for (let char in letterCount) {
//         if (letterCount[char] > 1) {
//             repeatedLetters[char] = letterCount[char];
//         }
//     }

//     return repeatedLetters;
// }


// const inputString = "Apple";
// console.log(calcLetters(inputString)); 

   





