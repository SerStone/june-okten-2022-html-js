// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let stroka = 'наслаждение';
//
// function cutString(str ,n){
//     for (let i = 0; i < str.length; i+=n) {
//         console.log(str.substring(i, n+i));
//
//     }
//
// }
//
// cutString(stroka,3)


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, length){
//     document.write(str.substring(0, length));
// }
// delete_characters(str,7)


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let strr = "HTML JavaScript PHP";

// function insert_dash(str) {
//
//     return str.replaceAll(' ', '-').toUpperCase();
// }
//
// console.log(insert_dash(strr));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let strr = 'tiger';
// function upper(str){
//    return str.charAt(0).toUpperCase()+str.slice(1)
// }
//
// console.log(upper(strr));


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// function normalize(str) {
//     let string = str.split('').map(value => (value>='A' && value<='Z')||(value >= 'a' && value <= 'z')?value:' ').join('').trim();
//     while (string.includes('  ')){
//         string = string.replace('  ',' ');
//     }
//     return string;
// }
// console.log(normalize(n1));
// console.log(normalize(n2));
// console.log(normalize(n3));
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let mas1 = [];
// function getRandom(min, max, array) {
//     let mas = [];
// for (let i = 0;i<20;i++){
//     mas[i] = Math.floor(Math.random()*(max-min)+min)
// }
// array.push(mas);
// return mas;
//
// }
// console.log(getRandom(0, 100, mas1));





// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

//     let mas = [];
// for (let i = 0;i<20;i++){
//     mas[i] = Math.floor(Math.random() * (100))
// }
//
// console.log(mas.sort((a, b) => {return a - b}));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//     let mas = [];
// for (let i = 0;i<20;i++){
//     mas[i] = Math.floor(Math.random() * (100))
// }
// console.log(mas.filter(value => value%2===0 && value!==0))
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let sr = 'i can swim'
// function capitalize(str){
//     let arr = str.split(" ");
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//         }
//     return arr.join(" ");
//     }
//
// console.log(capitalize(sr));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// // // someeMAIL@gmail.com
// // // someeMAIL@i.ua
// // // some.email@gmail.com


// let take1 = 'someeMAIL@gmail.com';
// let take2 = 'someeMAIL@i.ua';
// let take3 = 'some.email@gmail.com'
// //
//
// function validator(email) {
//
//     let raulik = email.indexOf("@");
//     if(raulik < 1){
//         return false;
//     }
//     let dot = email.indexOf(".");
//     if(dot <= raulik + 2){
//         return false;
//     }
//     return dot !== email.length - 1;
// }
//
// console.log(validator(take1));
// console.log(validator(take2));
// console.log(validator(take3));
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// console.log(coursesArray.sort((a, b) => {return b.modules.length - a.modules.length}))




// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// let str = "Астрономия это наука о небесных объектах";
// let symb = "о";
// let count=(str, stringsearch)=>{
//   let count1=0;
//     for (const strElement of str) {
//         if (strElement===stringsearch){
//             count1++
//         }
//     }
//
//         return count1
// }
// console.log(count(str, symb));
//


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.

// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//     let str = "Сила тяжести приложена к центру масс тела";

// let cutString = (str, n)=>{
// return str.split(' ').slice(0,n).join(' ');
//
// }
// document.write(cutString(str,3));



// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let library = [
//     {name: 'Harry Potter,and philosopher stone',pagecount: 450,authors:['Joan Roaling'],genre: ['fantasy','fantastic']},
//     {name: 'Hobbit',pagecount: 550,authors:['John Tolkin'],genre: ['fantastic']},
//     {name: 'Sherlok Holmes',pagecount: 350,authors:['Arthur Conan Doyle'],genre: ['detective']},
//     {name: 'Tower',pagecount: 250,authors:['Joan Geek','Marley Kot'],genre: ['drama','fantasy','fantastic']},
// ];
// -знайти наібльшу книжку.
// let pagemax = library[0].pagecount
// library.forEach(value => {if (value.pagecount>pagemax){
//     pagemax =value.pagecount
//     console.log(pagemax);
// }});


// - знайти книжку/ки з найбільшою кількістю жанрів
// let genremax = library[0].genre;
// library.forEach(value =>{
// if (value.genre.length > genremax.length){
// genremax = value.genre;
//     console.log(genremax);
// }})

// - знайти книжку/ки з найдовшою назвою
// let bookname = library[0].name;
//
// library.forEach(value => {
//     if (value.name.length > bookname.length){
//
//     bookname = value.name;
// console.log(bookname);
//
// }
//     else if (value.name.length === bookname.length) {
//
//         console.log(bookname)
//     }
// })

// - знайти книжку/ки які писали 2 автори
// library.forEach(value => {if (value.authors.length===2){
//     console.log(value);
// }});
// - знайти книжку/ки які писав 1 автор
// library.forEach(value => {if (value.authors.length===1&&value){
//     console.log(value);
// }});
// - вісортувати книжки по кількості сторінок по зростанню
// console.log(library.sort((a, b) => {
//     return a.pagecount - b.pagecount
// }));
