var myPetsArray = [{
    animalType: "Dog",
    name: "pujdo"
},
{
animalType: "Cat",
name: "Maca"
},
{
    animalType: "Bird",
    name: "Tweety"
}];
function myPetsFunction(pets) {
    // Only change code below this line
    var myPets = myPetsArray[1].name;
    return myPets;   
    // Only change code above this line
};
console.log(myPetsFunction()); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;