//Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

let fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

let transformedFruits = fruits.map(fruit => fruit === ' ' ? 'empty string' : fruit);

console.log(transformedFruits);