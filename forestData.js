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

// 1. Change the name of "Riverside Park" to "Riverside Greenspace"
parks.forEach(park => {
    if (park.name === "Riverside Park") {
        park.name = "Riverside Greenspace";
    }
});

// 2. Change the tree species "Maple" to "Sugar Maple" in "Central Park"
parks.forEach(park => {
    if (park.name === "Central Park") {
        park.trees.forEach(tree => {
            if (tree.species === "Maple") {
                tree.species = "Sugar Maple";
            }
        });
    }
});

// 3. Add a new tree to "Central Park"
parks.forEach(park => {
    if (park.name === "Central Park") {
        park.trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });
    }
});

// 4. Get a list of all tree species in "Central Park"
let centralParkTrees = parks.find(park => park.name === "Central Park").trees.map(tree => tree.species);

// 5. Calculate the average age of all trees
let allTrees = parks.flatMap(park => park.trees);
let totalAge = allTrees.reduce((sum, tree) => sum + tree.age, 0);
let averageTreeAge = totalAge / allTrees.length;

// 6. Find the tallest tree
let tallestTree = allTrees.reduce((tallest, tree) => tree.height > tallest.height ? tree : tallest, allTrees[0]);

// 7. Remove "playground" from "Central Park" facilities
parks.forEach(park => {
    if (park.name === "Central Park") {
        park.facilities = park.facilities.filter(facility => facility !== "playground");
    }
});

// 8. Convert parks array to JSON
let parksJSON = JSON.stringify(parks, null, 2);

// 9. Display the name and facilities of the first item in the parks array
console.log(`Name: ${parks[0].name}, Facilities: ${parks[0].facilities.join(", ")}`);

// 10. Display the species of the third item in the parks array
console.log(`Species of third park's trees: ${parks[2].trees.map(tree => tree.species).join(", ")}`);

