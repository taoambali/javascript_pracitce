let toothpastes = ['Oral-B', 'Close up', 'Pepsodent', 'Colgate', 'Sensodyne'];

let toothpastes2 = ['Macleans', 'Dabur'];

// Get All toothpaste array
console.log(toothpastes);

// Get pepsodent from the toothpaste array
// Pepsodent is in position 3 BUT on index 2 because in programming we count from 0
console.log(toothpastes[2]);


// Get the length of toothpaste array
console.log(toothpastes.length);

// Add to the end of toothpastes array - Aquafresh
toothpastes.push('AquaFresh');
console.log(toothpastes.length)
console.log(toothpastes);

// Add to the front of toothpastes array - Mymy
toothpastes.unshift('Mymy');
console.log(toothpastes.length)
console.log(toothpastes);

// Remove from the end of the array
toothpastes.pop() 
console.log(toothpastes.length)
console.log(toothpastes);

// Remove from the front of the array
toothpastes.shift() 
console.log(toothpastes.length)
console.log(toothpastes);

// Concatenate two array together - toothpastes & toothpastes2
console.log(toothpastes.concat(toothpastes2));



