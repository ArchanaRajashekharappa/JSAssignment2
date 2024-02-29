

     //add  the number
// function add(a,b){
//       return a+b
// }
// let result=add(2,4)
// console.log(result);



       //even and odd  **************************************************************************************
// function evenodd(number){
//    if(number%2===0){
//     return "even"
//    }else{
//     return "odd"
//    }
// }
// console.log(`${evenodd(12)}`)

// using promt finding the even and odd number *******************************************************************
    
// let input=prompt("enter a number")
// let number=parseInt(input)
// function evenOdd(number){
//        if(number%2==0){
//         return "even"
//        }else{
//         return"odd"
//        }
// }
// let result=evenOdd (number)
// console.log(`{result}`);


    // square number       ****************************************************************************

// function square(number){
//     return number*number*number
// }
// let result=(`${square(6)}`)
// console.log(result);

       //concat two number   **********************************************************************************

// function concat(str,str2){
//       return str+str2
//   }
//  let result=concat("Archaan","R")
//  console.log(result);


                  //reverse      *********************************************************************************
//     function reverse(str) {
//   return str.split("").reverse().join("");
//   }
//    let firstString = "ARchana";
//   let reversedString = reverse(firstString);
//   console.log(reversedString); 
  
               //factorial   ********************************************************************************************
// function fact(n){
//     if(n==0){
//         return 1
//     }else{
//         return n*fact(n-1)
//     }
// }
// let number=5
// console.log(`${fact(number)}`)

        //max &min              ***********************************************************************************************
// function max(num1,num2){
//   return Math.max(num1,num2)
// }
// let result=max(23,566)
// console.log(result);
   
       // greet person    *********************************************************************************************************

// function greetPerson(name){
//    return `hello,${name}`
// }
// let result=greetPerson("Archana")
// console.log(result);
         
         //aversge      ****************************************************************************************************************
// let array=[1,2,3,4,5]
// let average=(array)=>{
//     let sum=array.reduce((total,cur)=>total+cur)
//     return sum/array.length
// }
// let result=average(array)
// console.log(result);





// function myForEach(array,callback){
//      for(let i=0;i<array.lenght;i++){
//         callback(array[i],i,array)
//      }
// }
// let number=[1,2,3,4,5,]
// number.forEach((Element,index,arr)=>{
//     console.log(`${Element},${index}`);
// })

// let number=[10,20,30,50]
// function mymap(x){
//    return x**2
// }
// let result=number.map(mymap)
// console.log(result);

// let number=[1,2,3,4,5]
// function myFilter(x){
//     return x%2==1
// }
// let result=number.filter(myFilter)
// console.log(result);

// function compose(func1,func2){
// return function(...args){
//     return func1(func2(...args))
// }
// }
// let add=(x)=>x+2
// let multipication=(x)=>x*3

// let result=compose(multipication,add)
// console.log(result(2));


// const numbers = [1, 2, 3, 4, 5, 6];

// const squaredNumbers = numbers
//  .filter(number => number % 2 === 0) 
//   .map(number => number * number) 
//   .reduce((acc, curr) => acc + curr, 0); 

// console.log(squaredNumbers); 

// function isPalindrome(str){
//     let left=0
//     let right=str.lenght-1;
//     while(left<right){
//         if(str[left]!==str[right]){
//             return false
//         }
//         left++
//      right--
//     }
//     return true

    
// }
// console.log(isPalindrome(string));