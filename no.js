// function classifer(x) {
//   if (x > 0 && x % 2 === 0) {
//     console.log("postive and even");
//   }
//   else if (x < 0 && x % 2 === 1) {
//     console.log("negative and odd");
//   }
//   else if (x > 0 && x % 2 === 1) {
//     console.log("postive and odd");
//   }
//   else if (x < 0 && x % 2 === 0) {
//     console.log("negative and even");
//   }else
//   console.log("None and none")

// }
// classifer(0)

// function letterGrade(X) {
//     if(X >= 90) {
//         console.log("A = workers")
//     } else if(X >= 80) { 
//         console.log("B = managers")
//     } else if(X >=70) {
//         console.log("C = ceo")
//     } else if(X >=60) {
//         console.log("D = philosopher")
//     } else{
//         console.log("f = inventor")
//     }
// }

// letterGrade(43)

// function fizzBuzz(X) {
//   if (X%3 === 0 && X%5 ===0 ){
//     console.log("fizzbuzz")
//   }else if(X%3 === 0){
//     console.log("fizz")
//   }else if (X%5 === 0 ){
//     console.log("buzz")
//   }else
//     console.log("none")
// }
// fizzBuzz(4)
function getShippingCost(weight, isMember){
    if (isMember === "no" && weight <= 5){
        console.log("$8")
    }else if (isMember === "no" && weight > 5){
        console.log("$12")
    }if (isMember === "yes" && weight <= 5){
        console.log("Free")
    }if (isMember === "yes" && weight > 5){
        console.log("$3")
}
}
getShippingCost(13, "yes")