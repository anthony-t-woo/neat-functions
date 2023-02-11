//  take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
}

// takes the array as an argument and returns the outlier (even or odd)
function findOutlier(integers) {
    return integers.filter((int) => int % 2 === 0).length === 1
        ? integers.filter((int) => int % 2 === 0)[0]
        : integers.filter((int) => !(int % 2 === 0))[0];
}

// take an array of numbers and all the zeros to the end of the number
function moveZeros(arr) {
    return arr.filter((a) => !(a === 0)).concat(arr.filter((a) => a === 0));
}

// determine total perimeter of squares within a rectangle (fib sequence)
function perimeter(n) {
    let array = [0, 1];
    let perim = 0;
    for (let i = 0; i < n; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return (
        array.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0) * 4
    );
}
