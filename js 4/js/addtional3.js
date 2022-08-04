// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// b. заповнити його 50 непарними числами за допомоги циклу.
// let mas1 = [];
// let mas2 = [];
// for (let i = 0; i < 50; i++){
//     i%2 === 0 ? mas1[i] = i : mas2[i] = i;
// }
// console.log(mas1);
// console.log(mas2);
//
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let mas3 = [];
// for (let i = 0;i<20;i++){
//     mas3[i] = Math.random()
// }
// console.log(mas3);
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let mas4 = [];
// for (let i = 0;i<20;i++){
//     mas4[i] = Math.floor(Math.random()*(732)+8);
// }
// console.log(mas4);
// // 2. Вивести за допомогою console.log кожен третій елемен
// for (i=2;i<mas4.length;i+=3){
//     console.log(mas4[i]);
// }
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (i=2;i<mas4.length;i+=3){
//     if (mas4[i]%2 === 0) {
//         console.log(mas4[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let  mas5 = [];
// for (i=2;i<mas4.length;i+=3){
//     if (mas4[i]%2 === 0) {
//         mas5.push(mas4[i])
//     }
// }
// console.log(mas5);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let mas6 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < mas6.length; i++) {
//     if (mas6[i]%2 === 0) {
//         console.log(mas6[i-1]);
//     }
//
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let ser=0;
// let mas7 = [100,250,50,168,120,345,188];
// for (let i = 0; i < mas7.length; i++) {
//     ser += mas7[i];
//
// }
// console.log(ser);
// ser /= mas7.length;
// console.log(ser);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let mas9 = [];
// let mas8 = [];
// for (let i = 0;i<20;i++){
//     mas8[i] = Math.floor(Math.random()*(10)+1);
//         mas8[i]*=5;
//     mas9.push(mas8[i])
//
//
// }
// console.log(mas9);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let mas11 = [];
// let mas10 = ['1',2,3,'4',true];
// for (let i = 0; i < mas10.length; i++) {
//    if (typeof mas10[i]==="number")
//    {
//        mas11.push(mas10[i])
//    }
//
// }
// console.log(mas11);
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities = [];
//
//
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
// };
//           usersWithCities.push(usersWithId)
// console.log(usersWithCities);


//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let mas11 = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < mas11.length; i++) {
//     if (mas11[i]%2===0){
//     console.log(mas11[i])
//     }
//
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let mas11 = [1,2,3,4,5,6,7,8,9,10];
// let mas12 = [];
// for (let i = 0; i < mas11.length; i++) {
//    mas12.push(mas11[i])
//
// }
// console.log(mas12);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let mas13 = [ 'a', 'b', 'c'];
// let str = "";
// for (let i = 0; i < mas13.length; i++) {
//     str+=mas13[i];
//
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let mas13 = [ 'a', 'b', 'c'];
// let str = "";
// let i = 0;
// while (i<mas13.length){
//     str+=mas13[i];
//     i++
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let mas13 = [ 'a', 'b', 'c'];
// let str = "";
// for (const arrayElement of mas13) {
//     str+=arrayElement
// }
// console.log(str)