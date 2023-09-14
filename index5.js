function last(a, l = 1) {
    if (l === 1) {
        return a[a.length - 1];
    }
    else {
        return a.slice(Math.max(a.length - l, 0));
    }
}

console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2]));