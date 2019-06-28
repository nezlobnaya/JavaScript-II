console.log(`==== Challenge 1: Write your own closure ====`);
// Write a simple closure of your own creation.  Keep it simple!
console.log(`===Option1===`)

const Greeting = name => {
  console.log(`Good morning, ${name}`);

  const frenchGreeting = () => {
    console.log(`Bonjour, ${name}`);

    const russianGreeting = () => {
      console.log(`Privet, ${name}`);
    };
    russianGreeting(name);
  };
  frenchGreeting(name);
};
Greeting("Vlad");

console.log(`===Option2===`);

function person() {
  let name = 'Vlad';
  
  return function displayName() {
    console.log(name);
  };
}
let vlad = person();
vlad(); 

console.log(`===Option3===`);
function parentFunc() {
  let myName = 'Vlad';
  function childFunc() {
    console.log('Hello, ' + myName);
  }
  return childFunc;
}

let testFunc = parentFunc();
testFunc();


 

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


console.log(`==== Challenge 2: Create a counter function ====`);
const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return() => {
    return ++count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


console.log(`==== Challenge 3: Create a counter function with an object that can increment and decrement ====`);
// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let count = 0;
  return {
      increment: () => (++count),
      decrement: () => (--count)
    }
}
  
const newCounterFactory = counterFactory();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.decrement();
newCounterFactory.decrement();
newCounterFactory.decrement();
newCounterFactory.decrement();

