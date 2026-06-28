let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let mapResult = array.map((num) => {
    return num;
})


let reduceResult = array.reduce((acc, num) => {
    return acc + num;
});


let filterResult = array.filter((num) =>{
    return num % 2 ==0;
})

let filterResultEven = array.filter((num) =>{
    return num % 2 != 0;
})
console.log(mapResult);

console.log(reduceResult);

console.log(filterResult);

console.log(filterResultEven);