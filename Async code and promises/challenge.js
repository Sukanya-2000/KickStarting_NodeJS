//Challenge Can you make the above code print in the following sequence using promises and async/await. Write the code and paste it here

//Expected Output:   a b  c  d  e



console.log('a');
console.log('b');
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

async function asyncLog() {
 await delay(3000);
 console.log('c');
 await delay(0);
 console.log('d');
}
asyncLog().then(() => console.log('e'));