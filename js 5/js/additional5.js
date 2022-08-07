// описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minNum = (a,b,c) => {
//     let min = 0 ;
//     if (a<b && a<c){
//         min = a;
//         console.log(min)
//     }
//     else if (b<a && b<c){
//         min = b;
//     console.log(min)
//     }
//     else {
//         min = c;
//         console.log(min)
//     }
// }
// minNum(6,5,3)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const maxNum = (a,b,c) => {
//     let max = 0 ;
//     if (a>b && a>c){
//         max = a;
//         console.log(max)
//     }
//     else if (b>a && b>c){
//         max = b;
//         console.log(max)
//     }
//     else {
//         max = c;
//         console.log(max)
//     }
// }
// maxNum(6,12,32)


// - створити функцію яка повертає найбільше число з масиву
// let massive = [5,1,0,6,5,4];
// const maxElement = (array) => {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > max){
//             max = arrayElement;
//         }
//     }
//     console.log(max);
//
// }
//
// maxElement(massive);

// - створити функцію яка повертає найменьше число з масиву

// let massive = [5,1,0,5,4];
// const minElement = (array) => {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement<min){
//             min = arrayElement;
//         }
//     }
//     console.log(min);
//
// }
//
// minElement(massive);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let massive = [1,2,3,4,5];
// const sumcount = (array) => {
//     let res = 0;
//     for (const arrayElement of array) {
//
//         res +=arrayElement
//     }
//     return res;
// }
//
// console.log(sumcount(massive));


// - Дано натуральное число n. Выведите все числа от 1 до n.

// function diapazonOfNum(n){
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//
//     }
// }
// diapazonOfNum(11)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// function upgradedDiapazon(a,b){
//
//         if (a<b){
//             for (a; a <= b; a++) {
//                 console.log(a)
//             }
//         }
//         else {
//             for (a; a >= b; a--){
//                 console.log(a)
//             }
//         }
//
// }
// upgradedDiapazon(8,3)
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function swappingMode(array,i){
//     let temp = 0;
//     for (let j = 0; j < array.length; j++) {
//         if (i === j){
//            temp = array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp
//         console.log(array)
//         }
// }
//     }
// swappingMode([1,2,3,4],1);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let massive = [1,0,67,0,3,4]
//
// function appendMaybe(array){
//
//     const newMassive = [];
//     let count = 0;
//     let u = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===0){
//
//         count++;
//         }
//     else{
//             newMassive[u++] =array[i];
//     }
//     }
//     let zerocount =newMassive.length
//
//     for (let i = 0; i < count; i++) {
//         newMassive[zerocount++]=0;
//     }
//     console.log(newMassive);
// }
// appendMaybe(massive);
