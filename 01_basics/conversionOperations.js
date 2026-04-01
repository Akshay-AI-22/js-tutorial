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

