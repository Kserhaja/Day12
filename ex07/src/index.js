var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let it Rock", 
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999", 
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Rober Palmer",
        tracks: []
    },
};
    // Keep a copy of the collection for test
    var oldCollection = JSON.parse(JSON.stringify(collection));
    function updateRecords(object, id, prop, value) {
        // Only change code below this line
        // Only change code above this line
    }
console.log(updateRecords(collection, id, prop, value)); // Change this line
module.exports = updateRecords;