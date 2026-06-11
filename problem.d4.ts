// Day 4 — Objects & Loops
// Problem 1: Count Object Properties

function countProperties(obj: object): number {
    return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2, c: 3 }));

// Problem 2: Merge Two Objects

function mergeObjects(obj1: object, obj2: object): object {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1 }, { b: 2 }));


// Problem 3: FizzBuzz

function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);


// Problem 4: Invert an Object

function invertObject(obj: Record<string, any>): Record<string, any> {
  const newObj: Record<string, any> = {};
  
  for (const key in obj) {
    const value = obj[key];
    newObj[value] = key;
  }
  
  return newObj;
}

console.log(invertObject({a: 1, b: 2}));