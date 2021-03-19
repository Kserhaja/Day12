var arr = [1, 2, 3, 4, 5, 6];

function myRecursion(arr, n) {
    
        // Only change code below this line
    
    if (n <= 0) { return 0;}
    else { return (arr[n - 1] + myRecursion(arr, n - 1))};
        // Only change code above this line
    
};
console.log(myRecursion(arr,0)); 
console.log(myRecursion(arr,2));
console.log(myRecursion(arr,3));
console.log(myRecursion(arr,5));

module.exports = myRecursion;   
