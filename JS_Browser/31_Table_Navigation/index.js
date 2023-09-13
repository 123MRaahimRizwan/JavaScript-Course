let table = document.body.firstElementChild.firstElementChild;
console.log(table);
console.log(table.rows);
console.log(table.caption);
console.log(table.tHead);
console.log(table.tHead.firstElementChild);
console.log(table.tFoot); // tFoot is not present here therefore it returns null
console.log(table.tBodies);
console.log(table.rows[0].rowIndex);
console.log(typeof document); // Output: object
console.log(typeof window); // Output: object
