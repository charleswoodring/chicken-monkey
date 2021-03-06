// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey")
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken")
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey")
    } else if (currentNumber % 5 !== 0 || currentNumber % 7 !== 0) {
        console.log(currentNumber)
    }
}

// Below did not work because it changed the value of currentNumber to a string.
// The next time it evaluated currentNumber, it was not an intiger and stopped.
// returned 1, 2, 3, 4, Chicken and stops
        // if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        //     currentNumber = "ChickenMonkey"
        // } else if (currentNumber % 5 === 0) {
        //     currentNumber = "Chicken"
        // } else if (currentNumber % 7 === 0) {
        //     currentNumber = "Monkey"
        // } else {
        //     currentNumber = currentNumber
        // }
        // console.log(currentNumber)
        // }