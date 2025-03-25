let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }
];

// 1. Change "Riverside Park" to "Riverside Greenspace"
for (let i = 0; i < parks.length; i++) {
    if (parks[i].name === "Riverside Park") {
        parks[i].name = "Riverside Greenspace";
        break; // no need to keep checking once we’ve found it
    }
}

// 2. Rename "Maple" to "Sugar Maple" in "Central Park"
parks.forEach(park => {
    if (park.name === "Central Park") {
        park.trees.forEach(tree => {
            if (tree.species === "Maple") tree.species = "Sugar Maple";
        });
    }
});

// 3. Add a new tree to "Central Park"
for (let park of parks) {
    if (park.name === "Central Park") {
        park.trees.push({
            species: "Birch", 
            age: 7, 
            health: "Good", 
            height: 18
        });
        break;
    }
}

// 4. Get all tree species in "Central Park"
const centralParkTrees = parks
    .find(park => park.name === "Central Park")
    .trees
    .map(tree => tree.species);

// 5. Calculate average tree age
const allTrees = parks.flatMap(park => park.trees);
const totalAge = allTrees.reduce((sum, tree) => sum + tree.age, 0);
const averageTreeAge = totalAge / allTrees.length;

// 6. Find tallest tree
let tallestTree = allTrees[0];
for (let tree of allTrees) {
    if (tree.height > tallestTree.height) tallestTree = tree;
}

// 7. Remove "playground" from Central Park’s facilities
parks.forEach(park => {
    if (park.name === "Central Park") {
        park.facilities = park.facilities.filter(facility => facility !== "playground");
    }
});

// 8. Convert parks array to JSON
const parksJSON = JSON.stringify(parks, null, 2); // Pretty format for better readability

// 9. Display name and facilities of the first park
console.log(`Name: ${parks[0].name}`);
console.log(`Facilities: ${parks[0].facilities.join(", ")}`);

// 10. Display species of trees in the third park
const thirdParkSpecies = parks[2].trees.map(tree => tree.species);
console.log(`Species of third park's trees: ${thirdParkSpecies.join(", ")}`);
