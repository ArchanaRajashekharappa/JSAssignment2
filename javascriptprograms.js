

    //1 // finding the first and second max



    //  let arr = [1, 2, 3, 4, 5, 6, 7];
    
    //  let firstMax=arr[0]
    //  let secondMax=arr[0]
    //  let firstmin=arr[0]
    //  let secondMin=arr[1]

    //  for(let i=0;i<=arr.length;i++){
    //     if(arr[i]>firstMax){
    //         secondMax=firstMax
    //         firstMax=arr[i]
    //     } else if(arr[i]>secondMax && arr[i]!==firstMax){
    //         secondMax=arr[i]
    //     }
    //     if(arr[i]<firstmin){
    //         secondMin=firstmin
    //         firstmin=arr[i]

    //     } else if( arr[i]<secondMin && arr[i]!==firstmin){
    //         secondMin=arr[i]
    //     }
    //  }
    // //  console.log(firstMax);
    //  console.log(secondMax);
    // //  console.log(firstmin);
    //  console.log(secondMin);



     /// 2  sort the array


    //  let arr=[1,6,8,9,3,2,4]


    //   for(let i=0;i<=arr.length-1;i++){
    //     for(j=0;j<arr.length-i-1;j++){
    //         if(arr[j]>arr[j+1]){
    //           temp=arr[j]
    //           arr[j]=arr[j+1]
    //           arr[j+1]=temp

    //         }
    //     }
    //   }
    //   console.log(arr);




    // 3 ]  remove dublicaates

// let arr=[1,2,3,4,5,6,7,8,8,8]
// let abc={}
// for(let i=0;i<=arr.length;i++){
//     let Element=arr[i]
//     if(abc[Element]){
//         abc[Element]++
//     } else{
//         abc[Element]=1
//     }
// }
// console.log("abc",abc);


// 4   finding second heighest number in nested arr

// function findSecondLargest(arr) {
//     let largest = arr[0];
//     let secondLargest = arr[0];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (arr[i][j] > largest) {
//                     secondLargest = largest;
//                     largest = arr[i][j];
//                 } else if (arr[i][j] > secondLargest && arr[i][j] !== largest) {
//                     secondLargest = arr[i][j];
//                 }
//             }
//         } else {
//             if (arr[i] > largest) {
//                 secondLargest = largest;
//                 largest = arr[i];
//             } else if (arr[i] > secondLargest && arr[i] !== largest) {
//                 secondLargest = arr[i];
//             }
//         }
//     }
    
//     return secondLargest;
// }


// let nestedArray = [1, [2, 3, 4], [5, [6, 7, 8]], 9];
// console.log(findSecondLargest(nestedArray)); 




//  5    adding zeros after 3 values   *********************************************************************************************************

// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function addZeros(arr, chunkSize) {
//     let newArr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]);
        
//         if ((i + 1) % chunkSize === 0 && i !== arr.length - 1) {
//             newArr.push(0);
//         }
//     }
    
//     return newArr;
// }


// let newArray = addZeros(originalArray, 3);
// console.log(newArray);





// 6    reverse a strinf without biuild in function


   
// let arr = ["archana"];
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// let reversedString = reverseString(arr[0]);
// console.log(reversedString); 



    //  7        fibnacci series **************************************************************************************************

// let n=5
// let fib=[0,1]
// for(i=2;i<=n;i++){
//     let result=fib[i-1]+fib[i-2]
//     fib.push(result)
// }
// console.log(fib);



// let arr=[1,2,3,,5,2,1,7,6,8,7,8]

// let abc={}
// for(let i=0;i<=arr.length;i++){
//     let Element=arr[i]
//     if(abc[Element]){
//         abc[Element]++
//     } else{
//         abc[Element]=1
//     }
// }
// console.log("abc",abc);


// let str = "aasdfffrryhhiii";
// let repeatedChars = {};
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (repeatedChars[char]) {
//         repeatedChars[char]++;
//     } else {
  
//         repeatedChars[char] = 1;
//     }
// }

// let result = Object.keys(repeatedChars).filter(char => repeatedChars[char] > 1);

// console.log("Repeated characters:", result); 




// 8 captlize the first letter

// let abc = ['abc', 'def', 'ghi'];


// for (let i = 0; i < abc.length; i++) {
//     let str = abc[i];
    
 
//     let firstChar = str.charCodeAt(0);
//     if (firstChar >= 97 && firstChar <= 122) { 
//         firstChar -= 32; 
//         str = String.fromCharCode(firstChar) + str.substring(1); 
//         abc[i] = str; 
//     }
// }

// console.log(abc);


// 9      calculate the sum of array objects in an array

// let students = [
//     { name: 'ramesh', marks: 85 },
//     { name: 'suresh', marks: 90 },
//     { name: 'girish', marks: 75 },
//     { name: 'ganesh', marks: 80 }
// ];

// let totalMarks = 0;


// for (let i = 0; i < students.length; i++) {
//     let student = students[i];
    
  
//     totalMarks += student.marks;
// }

// console.log("Total marks:", totalMarks);




// 10]  faltten the array***************************************************************************************************
// let arr = [1, 2, [3, 5, [6, 7]]];

// function flatten(arr) {
//     let abc = [];
    
//     for (let i = 0; i <arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             abc = abc.concat(flatten(arr[i]));
//         } else {
//             abc.push(arr[i]);
//         }
//     }
    
//     return abc;
// }

// let flattened = flatten(arr);
// console.log(flattened); 




// 11       remove dublicate in string "Helloworlld" ***********************************************************************************************

// function removeDuplicates(str) {
//     var uniqueChars = {};
//     var result = '';
    
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
//         if (!uniqueChars[char]) {
//             result += char;
//             uniqueChars[char] = true;
//         }
//     }
    
//     return result;
// }


// var str = "Helloworld";
// var stringWithoutDuplicates = removeDuplicates(str);
// console.log(stringWithoutDuplicates); 




// 12       camelcase to snake case


// function camelToSnake(camelCase) {
//     return camelCase.replace(/[A-Z]/g, function(match) {
//         return "_" + match.toLowerCase();
//     });
// }


// var camelCaseString = "helloWorldExample";
// var snakeCaseString = camelToSnake(camelCaseString);
// console.log(snakeCaseString); 



// 13   snake case to camecase ********************************************************************************************************



// function snakeToCamel(snakeCase) {
//     return snakeCase.replace(/_([a-z])/g, function(match, group1) {
//         return group1.toUpperCase();
//     });
// }


// var snakeCaseString = "hello_world_example";
// var camelCaseString = snakeToCamel(snakeCaseString);
// console.log(camelCaseString); 




 
// 14     pattern      ***************************************************************************8

// function generatePattern(rows) {
//     for (var i = 1; i <= rows; i++) {
//         var num = i;
//         var gap = rows - 1;
//         var currentNumber = num;
//         for (var j = 1; j <= i; j++) {
//             process.stdout.write(currentNumber.toString() + " ");
//             currentNumber += gap;
//             gap--;
//         }
//         process.stdout.write("\n");
//     }
// }


// var numberOfRows = 5;
// generatePattern(numberOfRows);



// 15      reverse a string without build in funvtiom



// function reverseString(str) {
//     var reversed = '';
//     for (var i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// var originalString = "hello";
// var reversedString = reverseString(originalString);
// console.log(reversedString); 




// 16implement a deep clone funcion in javascript that craetes a copy of a nested objext or array without any referce to thr original 88***********************


// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj; 
//     }
//    var clone = Array.isArray(obj) ? [] : {};

  
//     for (var key in obj) {
  
//         if (obj.hasOwnProperty(key)) {
            
//             clone[key] = deepClone(obj[key]);
//         }
//     }

//     return clone;
// }

// var originalObject = {
//     a: 1,
//     b: [2, 3, { c: 4 }],
//     d: { e: 5 }
// };

// var clonedObject = deepClone(originalObject);
// originalObject.b[0] = 99;

// console.log(originalObject); 
// console.log(clonedObject);   

    


// 17     remove the dublicates in array

// let a = [1, 2, 3, 4, 5];
// let b = [5, 3, 7, 8, 9];


// let combinedArray = a.concat(b);


// let uniqueArray = [...new Set(combinedArray)];

// console.log(uniqueArray); 