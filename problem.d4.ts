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