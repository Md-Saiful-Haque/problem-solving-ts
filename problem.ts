// Day 3 — Arrays & Array Methods
// Problem 1: Find the Sum of an Array

function sumArray(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));