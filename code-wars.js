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
