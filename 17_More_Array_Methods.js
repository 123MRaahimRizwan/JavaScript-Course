let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Delete property
console.log(array.length)
delete array[0]
console.log(array.length)
console.log(array);

// Concat Method
let array2 = [10,11,12,13,14,15,16]
let newArray = array.concat(array2) // concat can take more than one array
console.log(newArray)

// Sort Method

const compare = (a, b) => {
    return a - b; // a - b = ascending, b - a = descending 
}

let array3 = [1, 33, 44, 99, 88, 77, 56, 48, 396];
array3.sort(compare);
array3.reverse();
console.log(array3);


// Spice and Slice Methods

array.splice(2,3,1022,1023,1024) // Is used to insert elements in an array. It returns deleted values
console.log(array)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArraySlice = array.slice(2);
let newArraySliceArgument = array.slice(2, 4);
console.log(newArraySliceArgument);