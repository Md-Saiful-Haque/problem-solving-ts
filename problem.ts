// Day 3 — Arrays & Array Methods
// Problem 1: Find the Sum of an Array

function sumArray(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));


// Problem 2: Find Maximum Value in Array

function findMax(arr: number[]): number {
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([3, 1, 7, 2, 9]))


// Problem 3: Remove Duplicates from Array

function removeDuplicates(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]))


// Problem 4: Flatten a Nested Array

function flattenArray(arr: (number | number[])[]): number[] {
    return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5]]));


// Problem 5: Chunk an Array

function chunkArray(arr: number[], size: number): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

console.log(chunkArray([1,2,3,4,5], 2));