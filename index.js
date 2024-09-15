// #1 Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(a, b){
    return Math.abs(a - b);    // Difference can't be a negative value 
}

let result = calculateDifference(20, 10);
console.log(result);




// #2 Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(number){
    return number % 2 !== 0;
}

let response1 = isOdd(51);
console.log(response1);

let response2 = isOdd(100);
console.log(response2); 




// #3 Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(array){
    let newArray = Math.min(...array);
    return newArray;
}

let Array1 = [50, 30, 10, 5, 25, 80, 75];
let smallNumber = findMin(Array1);
console.log(smallNumber);




// #4 Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(array){
    return array.filter((item) => item % 2 === 0);
}

let Array2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let evenNumber = filterEvenNumbers(Array2);
console.log(evenNumber);




// #5 Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(array){
    return array.sort().reverse();
}

let Array3 = [10, 20, 30, 40 ,50, 60, 70, 80, 90];
let descendingArray = sortArrayDescending(Array3);
console.log(descendingArray);




// #6 Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(string){
    if(string.length === 0){
        return null;
    }
    else {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }
}

let lowerCaseLetter = lowercaseFirstLetter("BANGLADESH");
console.log(lowerCaseLetter);




// #7 Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(string){
    const vowelRegex = /[aeiouAEIOU]/g;
    const matches = string.match(vowelRegex);
    return matches? matches.length: 0; 
}

let vowelNumber = countVowels("BANGLADESHI people");
console.log(vowelNumber);




// #8 Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(array){
    if(array.length === 0){
        return null;
    }
    else{
        let summation = array.reduce((sum, num) => sum + num);
        return summation / array.length;
    }
}

let Array4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let average = findAverage(Array4);
console.log(average);