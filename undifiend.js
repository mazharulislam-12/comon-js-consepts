/**
   8 ways get undefine
    1. variable that is not initialized will give undefine
    2. function with no return
    3. parameter that is not passed will be undefined
    4. if return has nothing on the right side will return undefine
    5. property that does not exists on an object will give you undefine
    6. assessing array elements outside of the index range will give you array
    7. deleting an element inside an array
    8. set a value directly to undefine

 */


//1
let first;
console.log(first);

//2
function second(a, b) {
    const total = a + b;
}
const result = second()
console.log(result);

//3
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d); 
}
third(2, 6)

// 4
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const totals = noNegative(5, -10);
console.log(totals);

//5
const fifth = {id: 2, name: 'Hero', age: 23};
console.log(fifth.age.salary);

//6
const sixth = [4, 6, 9, 23, 44]
console.log(sixth[1], sixth[5], sixth[20]);

//7

delete sixth[1]; //you should not do it . instead use splice
console.log(sixth);

//8
const eight = undefined;

const ninght = null;
const data = {result: [], update: null};
console.log(typeof undefined);
console.log(typeof null);