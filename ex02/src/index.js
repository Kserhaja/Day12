function myCounter(n) {
    var arr = []
    // Only change code below this line

    if (n < 1) {
    return arr;

    } else {
    const countArray = myCounter(n - 1);
    countArray.push(n)
    return countArray;
    // Only change code above this line
    }

}
console.log(myCounter(-1)); 
console.log(myCounter(10)); 
console.log(myCounter(5)); 

module.exports = myCounter;   