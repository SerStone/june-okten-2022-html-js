// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaOfrectangle(a,b){
//     let res = a*b;
//     return res;
// }
// console.log(areaOfrectangle(4, 5));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let areaOfcircle= (r) => Math.PI * Math.pow(r, 2);
// console.log(areaOfcircle(5));

//
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r площа усього циліндра S = 2*pi*r*(r+h)
// let areaOfcylinder = (h,r) => 2*Math.PI * r*(r+h);
// console.log(areaOfcylinder(5,3));


// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayreader(array){
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement)
//     }
// }
// let massive = [1,2,3,4,5,6,7,8,true,false];
// arrayreader(massive);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraphMaker(txt){
//     document.write(`<p>${arguments[0]}</p>`)
// }
// //
// paragraphMaker('Hello world');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function obhortka(txt){
//     document.write(`
// <ul>
// <li>${arguments[0]}</li>
// <li>${arguments[0]}</li>
// <li>${arguments[0]}</li>
// </ul>`)
// }
//
// obhortka('hello',)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function upgradedObhortka(txt,number){
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         if (number === i){
//         }
//             document.write(`<li>${arguments[0]}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// upgradedObhortka('hello',3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let  massive6 = [1,2,true,false,'OKTEN','BEST'];
//
// function multiObhortka(array){
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//
//     }
// }
// multiObhortka(massive6)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let massive0 = [
//     {id: 1, name: 'vasya', age: 25},
//     {id: 2, name: 'petya', age: 23},
//     {id: 3, name: 'kolya', age: 27}
// ];
//
// function userData(array){
//     for (let i = 0; i < array.length; i++) {
//
//
//     document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`)
//     }
// }
//
// userData(massive0)
// - створити функцію яка повертає найменше число з масиву
// let massive4 = [8,9,3,4,1,6];
// function minNum(array){
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement<min){
//             min = arrayElement;
//         }
//     }
//     return min;
// }
//
// console.log(minNum(massive4));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let massive3 = [1,2,3,4,5,6];
//
// function sumaarr(array){
//      let sum=0;
//     for (let i = 0; i < array.length; i++) {
//
//         sum += array[i];
//
//     }
//     return sum;
//
// }
//
// console.log(sumaarr(massive3));