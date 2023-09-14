let a=[[1, 2, 1, 24], [8, 11, 9, 4], [5,6,8,2,4]]

for (let i = 0; i < a.length; i++) {
    console.log(`row ${i}:`);
    for (item of a[i]) {
        console.log(item);
    }
}
