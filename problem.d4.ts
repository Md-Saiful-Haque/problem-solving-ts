// Day 4 — Objects & Loops
// Problem 1: Count Object Properties

function countProperties(obj: object): number {
    return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2, c: 3 }));