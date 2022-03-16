/*
 * Create an object with two properties, 'Name' and 'Age'
 */
var actor = {
    Name: 'Julia Roberts', 
    Age: 36,
    Weight: 60
};

// Print the object
console.log('The \'actor\' object:', actor);

// Access object's properties using bracket notation
console.log('The \'Name\' property:', actor['Name']);
console.log('The \'Age\' property:', actor['Age']);
console.log('The \'Weight\' property:', actor['Weight']);

// Access object's properties using dot notation
console.log('The \'Name\' property:', actor.Name);
console.log('The \'Age\' property:', actor.Age);
console.log('The \'Weight\' property:', actor.Weight);

// Add a new property called 'EyeColor'
actor.EyeColor = 'Brown';

// Print the object
console.log('The updated \'actor\' object:', actor);

// Trying to access undefined property results in 'undefined'
console.log('Attempt to access an undefined property (\'HairColor\'):', 
    actor.HairColor);