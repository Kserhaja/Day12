var contacts = [{
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"]
},
    { "firstName": "Jane",
      "lastName": "Doe",
      "number": "4568295761",
      "likes": ["Phyton", "Swift", "R"]
},
{      "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"] 
    },
{     "firstName": "Jane",
      "lastName": "Roe",
       "number": "unkown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]}
];
function lookUpProfile(name, prop) {
    // Only change code below this line
    var value;
    for (var i = 0; i < contacts.length; i++){
      if((contacts[i].firstName === name) && 
         (contacts[i].hasOwnProperty(prop))){
        value = contacts[i][prop];
        break;
    }
    if (contacts[i].hasOwnProperty(name) === false){
      value = "No such contact";
    }
    if (contacts[i].hasOwnProperty(prop) === false) {
      value = "No such property";
    }
    }
    return value;
    }
    // Only change code above this line
console.log(lookUpProfile("John", "likes")); // Change this line
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "adress"));
module.exports = lookUpProfile;