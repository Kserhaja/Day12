var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var text = "The starting number will always be less than or equal to the ending number"
function rangeOfNumbers(startN, endN) {
    
    // Only change code below this line

    if (startN - endN == 0) {
    return [startN];
    
    } else if (startN <= endN) {
    var numbers = rangeOfNumbers(startN, endN - 1);
    numbers.push(endN);
    return numbers;
   
    // Only change code above this line
    }else if (startN < endN)
    numbers.push(startN)
    return text;
}
console.log(rangeOfNumbers(1, 7)); 
console.log(rangeOfNumbers(3, 10)); 
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));

module.exports = rangeOfNumbers;   