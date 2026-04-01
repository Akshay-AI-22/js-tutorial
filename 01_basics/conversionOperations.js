// let score = 33 //number
// let score = "33" //string
// let score = "33abc"
/* In js, 33abc is not a number but its still get convert and will 
give result as 'NaN' (NaN also a value we can check)*/
// let score = null //0 (if the value is not convertible sometimes we get 0)
// let score = undefined //undefined
// let score = true //1
// let score = "Akshay" //Nan
let score = "33"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score) //type conversion
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isLoggedIn = "Akshay"
// 1 => True, 0 => False
// "" => False, "Akshay" => True

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "Akshay"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
