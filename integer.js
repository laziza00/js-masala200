// ============== 20.04.2022 uyga vazifa =====================


//=============== masala 210=================



// let a = 8
// let b = 204

//=============== masala 211=================


// let c ="C++😂"

// function splitFunc (arr) {

//     return arr.split('')

// }
// let res = splitFunc(c);

// console.log(res);

//=============== masala 212================


//=============== masala 214================



// let arr = [1,2,2,1]
// let arr2 =[1,2,2,2]

// let palindromeArrayFunc = (arr) => {
  
//      return isPalindromeFunc(arr);
    
// }
// function isPalindromeFunc(arr) {
//     let isPalindromeNumber = true

//     for(let i = 0; i < arr.length / 2; i++) {

//         if(arr[i] !== arr[arr.length - i - 1]){
//             isPalindromeNumber = false; 
//           break;
//         }
//     }
    
//     return isPalindromeNumber;
// }

// console.log(palindromeArrayFunc(arr));
// console.log(palindromeArrayFunc(arr2));


// const test =(n) => n==n.toString().split(" ").reverse().join("")? 'polindrom':'emas'
// console.log(test(1112111));
//=============== masala 213================


// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

// function isPrime(arr) {
//   for (let start = 2; arr > start; start++) {
//     if (arr % start == 0) {
//       return false;
//     }
//   }
//   return arr > 1;
// }

// console.log(array.filter(isPrime)); 

// let arr  =[]
// let arr2 =[]
// let str ="98a24z61x23900b"

// for(let i=0; i<str.toString().length; i++) {
//   if(str[i].match(/[a-z]/)) {
//       arr.push(str[i]);
//   }
//   else {
//     arr2.push(str[i]);
//   }
// }
// console.log(arr.sort(), arr2);

// for(let i=0; i<arr2.length; i+2) {
//     for(let j=0;j<arr.length; j++) {
//         arr2.join(arr[j])
//     }
// }
// console.log(arr2);




// ============== 21.04.2022 uyga vazifa =====================




//=============== masala 206 ===============

// function isPrimeNumber(num) {
//   let count = 0
//   for (let i = 1; i <= Math.floor(num / 2); i++) {
//     // console.log(i);
//       if (num % i == 0) {
//           count += 1
//       }
//   }
//   return count > 1? false : true
// }

// let number = 1000
// let result = 0

// for (let i = 2; i < number; i++) {
//   // console.log(i);
//   if (isPrimeNumber(i)) {
//       result += 1
//   }
// }

// console.log(result);


//=============== masala 207 ===============


// function evaluate(str) {

//   let result = 0
//   let amallar = ["+", "-"]
//   let newStr = str.replace(/\s/g, '')

//   for (let i = 0; i < newStr.length; i++) {

//       if (amallar.includes(newStr[i])) {
          
//           if (newStr[i] == "-") {
//               result += - +newStr[i + 1]
//               i += 1
//           }else{
//               result += +newStr[i + 1]
//               i += 1
//           }
//       }
//       else{
//           result += +newStr[i]
//       }
//   }
//   return result
// }
// console.log(evaluate("     5  +3  -9    + 8"));

//=============== masala 214 ===============


// function getCharacterCount(n) {

//   for(let i=0; i<n.length; i++) {

//   }
// }

//=============== masala 215 ===============


// let arr =[1, 2, 3,4, 19,-2, -3];
// let arr2 =[]
// let min =arr[0]

// for(let i=0; i<arr.length; i++){
//   if(min>arr[i+1]) {
//     arr2.push(arr[i])
//   }
//   else {
//     arr2.push(arr[i])
//   }
// }
// console.log(arr2);

//=============== masala 216 ===============

// let arr =[0, 2, 35, -8, -45, 7, 34, -7, 76]
// let min = arr[0]

// function minNumber(arr) {

//   for(let i=0; i<arr.length; i++) {
  
//     console.log(arr[i]);
//     if(min>arr[i]) {
//      return min =arr[i]
//     }
//   }
// }

// console.log(minNumber(arr));



//=============== masala 217 ===============

// function showMessage(n) {
//   return n? "juft": "toq"
// }

// function oddOrEven(b) {
//   let tf =0
//   if(b%2==0) {
//     tf = true
//     return showMessage(tf)
//   }else {
//     tf= false;
//      return showMessage(tf)
//   }
// }
// console.log(oddOrEven(4));


//=============== masala 218 ===============

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],[7, 8, 9],
//   [10, 11, 12, 13, 14, 15]
// ];

// let flatArray = arr.reduce((acc, curVal) => {
//   return acc.concat(curVal)
// }, []);
// console.log(flatArray);

//=============== masala 219 ===============


// function recursie(n) {

//   if(n>=1 && n<=18) {
//     return n===1 ? 1 : n*recursie(n-1)
//   }
//   else{
//     return "1<=n<=18 bo'lishi kerak";
//   }
   
// }
// console.log(recursie(10));

//=============== masala 220 ===============

// function recursie(n) {

//   if(n>=1 && n<=18) {
//     return n===1 ? 1 : n*recursie(n-1)
//   }
//   else{
//     return "1<=n<=18 bo'lishi kerak";
//   }
   
// }
// console.log(recursie(10));


//============  masala 220 shaxmat ===============

// let arr =[
//      [1, 1, 1, 1], 
//      [5, 2, 2, 100],
//      [9, 4, 2, 1]

// ]
// for(let i=1; i<arr[0].length; i++) {
//   arr[0][i] += arr[0][i-1]
// }
// for(let i=1; i<arr.length; i++) {
//     arr[i][0] += arr[i-1][0]
//   }
//   for(let i=1; i<arr.length; i++) {
//       for(let j=1; j<arr[i].length; j++) {
//         let top = arr[i-1][j];
//         let left = arr[i][j-1];
//         arr [i][j] += top>left? left: top
//       }
//   }
// console.table(arr);
// console.log(arr[arr.length-1][arr[0].length-1]);

//============  masala 221 shaxmat ===============


// let arr =[
//      [1, 1, 1, 1], 
//      [5, 2, 2, 100],
//      [9, 4, 2, 1]

// ]

// for(let i=1; i<arr[0].length; i++) {
//   arr[0][i] += arr[0][i-1]
// }
// for(let i=1; i<arr.length; i++) {
//     arr[i][0] += arr[i-1][0]
//   }
//   for(let i=1; i<arr.length; i++) {
//       for(let j=1; j<arr[i].length; j++) {
//         let top = arr[i-1][j];
//         let left = arr[i][j-1];
//         arr [i][j] += top>left? left: top
//       }
//   }

// console.table(arr);
// console.log(arr[arr.length-1][arr[0].length-1]);

// function recFunc(array) {

// for(let i=1; i<array.length; i++) {
//   for(let j=1; j<array[i].length; j++) {

//     console.log(j);
//   }
  // console.log(array[i]);
// }
// }
// recFunc(arr)