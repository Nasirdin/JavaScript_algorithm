// linear search

// const array = [1,2,3,4,5,6,7,8,9,10,11,12];
// let count = 0
// function linearSearch(array, item) {
//     for(let i = 0; i < array.length; i++) {
//         count += 1
//         if(array[i] === item) {
//             return i
//         }
//     }
// }

// console.log(linearSearch(array, 10))
// console.log(count);

//////////////////////////////////////////////////////////////////

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// function binarySearch(array, item) {
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while(found === false && start <= end){
//         middle = Math.floor((start + end) / 2);
//         if(array[middle] === item) {
//             found = true;
//             position = middle;
//             return middle
//         }
//         if(item < array[middle]){
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
// }

// function binarySearch(array, item) {
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while(found === false && start <= end){
//         middle = Math.floor((start + end) / 2);
//         if(array[middle] === i2tem){
//             found = true;
//             position = middle;
//             return position;
//         }
//         if(item < array[middle]){
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
// }

// function binarySearch(array, item) {
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while(found === false && start <= end){
//         middle = Math.floor((start + end) / 2);
//         if(array[middle] === item){
//             found = true;
//             position = middle
//             return position
//         }
//         if(item < array[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1
//         }
//     }
//     return position
// }

// function binarySearch(array, item) {
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while (found === false && start <= end) {
//         middle = Math.floor((start + end) / 2);
//         if(array[middle] === item) {
//             found = true
//             position = middle;
//             return position
//         }
//         if(item < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position
// }

console.log(binarySearch(array, 9));