// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array0 = ['as',"df",`gh`,'jk',"lo"];
// let array1 = [1,2,3,4,5];
// let array2 = [1,'df',3,true,false];
// console.log(array0);
// console.log(array1);
// console.log(array2);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empt = [];
// empt[0] = 3;
// empt[1] = 2;
// empt[2] = 6;
// empt[3] = 67;
// empt[4] = '566';
// empt[5] = 66;
// empt[6] = 5;
//
// console.log(empt);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let array = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i = 0;
// while (i<array.length){
// i++;
//
//     document.write(array[i-1],'</br>');
// }

//     2. перебрати його циклом for
// for (let i = 0; i < array.length;i++){
//     document.write(array[i],'</br>')
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i<array.length){
// i+=2;
//
//     document.write(array[i-1],'</br>');
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < array.length;i+=2){
//     document.write(array[i],'</br>')
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = -1;
// while (i<array.length){
// i++;
// if (array[i]%2 === 0){
//
//     document.write(array[i],'</br>');
// }
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length;i++){
//     if (array[i]%2 ===0){
//
//     document.write(array[i],'</br>')
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array.length;i++){
//     if (array[i]%3 ===0){
//     array[i]='okten';
//     document.write(array[i],'</br>');
//     }
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = array.length-1; i >= 0;i--){
//
//     document.write(array[i],'</br>');
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1
// let i = array.length;
// while (i>0){
// i--;
//
//     document.write(array[i],'</br>');
//     console.log(array[i])
// }
// 2
// for (let i = array.length-1; i >= 0;i--){
//
//     document.write(array[i],'</br>');
//
// }
// 3
// let i = array.length;
// while (i>0){
// i-=2;
//
//     document.write(array[i+1],'</br>');
// }
// 4
// for (let i = array.length - 1; i >= 0; i-=2) {
//     document.write(array[i],'</br>');
//
// }
// 5
// let i = array.length;
// while (i>0){
// i--;
//     if (array[i]%2 === 0){
//
//     document.write(array[i],'</br>');
// }
// }
// 6
// for (let i = array.length-1; i >= 0;i--){
//
//     if (array[i]%2 === 0){
//
//         document.write(array[i],'</br>');
//     }
// }
// 7
// for (let i = array.length-1; i >= 0;i--){
//     if (array[i]%3 ===0){
//     array[i]='okten';
//     }
//     document.write(array[i],'</br>');
// }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let massive1 = [1,2,3,4,5,6,7,8,9,10];
// for (const arrayElement of massive1) {
//     console.log(arrayElement);
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let massive2 = ['1','2','3','4','5','6','7','8','9','10'];
// for (let i = 0; i < massive2.length; i++) {
//     const massive2Element = massive2[i];
//     console.log(massive2Element);
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let massive3 = [1,2,3,4,'5','6','7','8',true,false];
// for (let i = 0; i < massive3.length; i++) {
//     const massive3Element = massive3[i];
//     console.log(massive3Element);
// }

// let massive4 = [1,2,3,4,'5','6','7','8',true,false];
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (let i = 0; i < massive4.length; i++) {
//     const massive4Element = massive4[i];
//     if (typeof(massive4Element) ==="boolean") {
//         console.log(massive4Element);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let i = 0; i < massive4.length; i++) {
//     const massive4Element = massive4[i];
//     if (typeof(massive4Element) ==="number") {
//         console.log(massive4Element);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let i = 0; i < massive4.length; i++) {
//     const massive4Element = massive4[i];
//     if (typeof(massive4Element) ==="string") {
//         console.log(massive4Element);
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let massive5 = [];
// massive5[0] = 1;
// massive5[1] = 2;
// massive5[2] = 3;
// massive5[3] = 4;
// massive5[4] = '5';
// massive5[5] = '6'
// massive5[6] = '7'
// massive5[7] = '8'
// massive5[8] = true;
// massive5[9] = false;
// for (let i = 0; i < massive5.length; i++) {
//     const massive5Element = massive5[i];
//     console.log(massive5Element);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 9; i++) {
//
//     document.write(i,'</br>')
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 99; i++) {
//
//     document.write(i,'</br>')
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 99; i+=2) {
//
//     document.write(i,'</br>')
//     console.log(i);
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 99; i+=2) {
//
//     document.write(i,'</br>')
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.writefor (let i = 0; i <= 99; i+=2) {
// for (let i = 1; i <= 100; i+=2) {
//
//     document.write(i,'</br>')
//     console.log(i);
// }
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let library = [
    {name: ['Harry Potter','and philosopher stone'],pagecount: 450,authors:['Joan Roaling'],genre: ['fantasy','fantastic']},
    {name: ['Hobbit'],pagecount: 550,authors:['John Tolkin'],genre: ['fantastic']},
    {name: ['Sherlok Holmes'],pagecount: 750,authors:['Arthur Conan Doyle'],genre: ['detective']},
    {name: ['Tower'],pagecount: 250,authors:['Joan Geek','Marley Kot'],genre: ['drama']},
];
// -знайти найбільшу книжку.
//
// let max = library[0].pagecount;
// for (const libraryElement of library) {
//     if (libraryElement.pagecount>max){
//         max = libraryElement.pagecount;
//     }
// }
// console.log(max);
// - знайти книжку/ки з найбільшою кількістю жанрів
// let maxgenre = library[0];
// for (const libraryElement of library) {
//     if (libraryElement.genre > maxgenre.genre){
//         maxgenre = libraryElement.name;
//     }
// }
// console.log(maxgenre);

// - знайти книжку/ки з найдовшою назвою ??????як це можна було краще реалізувати?


// let maxname = library[0];
// for (const libraryElement of library) {
//     if (libraryElement.name < maxname.name){
//         maxname = libraryElement.name;
//     }
// }
// console.log(maxname);












// - знайти книжку/ки які писали 2 автори
// let maxauthors= library[0];
// for (const libraryElement of library) {
//     if (libraryElement.authors.length > maxauthors.authors.length){
//         maxauthors = libraryElement.authors;
//     }
// }
// console.log(maxauthors);
// - знайти книжку/ки які писав 1 автор

// let minauthors = library[0];
// for (const libraryElement of library) {
//     for (const userKey in libraryElement) {
//         {
//             if (libraryElement.authors.length <= minauthors.authors.length){
//
//                 console.log(userKey,libraryElement[userKey]);
//             }
//         }
//
//         console.log('*************');
//     }
// }