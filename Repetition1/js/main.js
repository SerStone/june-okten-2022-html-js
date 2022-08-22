// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// let middleName=`Misha`;
//     let firstName=`Markevych`;
// // let lastName=`Volodymyrovych`;
// // document.write(`${firstName} ${middleName} ${lastName}`)
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// let data =  prompt('Your firstname ?',firstName);
// let data1 =  prompt('Your middlename ?',middleName);
// let data2 =  parseInt(prompt('Your age ?'));
//
// console.log(data);
// console.log(data1);
// console.log(data2);

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [1,2,3,4,'5','6','7','8',true,false]
// console.log(arr);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// books = [
//     {name:'take1',pagecount:343,genre:'fantasy'},
//     {name:'take2',pagecount:223,genre:'horror'},
//     {name:'take3',pagecount:443,genre:'drama'}
// ]
// console.log(books);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// books = [
//     {name:'take1',pagecount:343,genre:'fantasy',authors:['men1','women2']},
//     {name:'take2',pagecount:223,genre:'horror',authors:['men2','women3']},
//     {name:'take3',pagecount:443,genre:'drama',authors:['men3','women1']}
// ]
// console.log(books);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'John', username: 'jok', pasword: '234kk5'},
//     {name: 'Mike', username: 'mik', pasword: '245j425'},
//     {name: 'Petro', username: 'pet', pasword: '877878m'},
//     {name: 'Billy', username: 'bil', pasword: '8687hy'},
//     {name: 'Herbert', username: 'her', pasword: '678j67'},
//     {name: 'Oleg', username: 'legi', pasword: 'sdk8678m'},
//     {name: 'Mark', username: 'marik', pasword: 's8786dkm'},
//     {name: 'Sara', username: 'ser', pasword: 'uj77ujkm'},
//     {name: 'Anna', username: 'ann', pasword: 'sjmmdk6j6j6m'},
//     {name: 'Oksana', username: 'ksen', pasword: 'ujuuk77m'}];
//
// for (const user of users) {
//
// console.log(user.pasword);
// }
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.


// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// console.log((friends.length > 3) ? 'more':'less');
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//
// let a =3;
// let b =5;
// let c =4;
//
// if ((a>b && a<c)||(a<b && a>c)){
//     console.log('The middle number is ',a)
// }
// else if ((b>a && b<c)||(b<a && b>c)){
//     console.log('The middle number is ',b)
// }
// else {
//     console.log('The middle number is ',c)
// }
// - Перепишіть конструкцію if з використанням умовного оператора '?':

// let a =2;
// let b =1;
// let result;
// console.log((a + b < 4)?result = 'Мало':result = 'Багато')

//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//

// let a = 1;
//
// console.log((a > 0 && a <= 100) ? 'Positive number' : (a < 0 && a >= -100) ? 'Negative number' : 'Equal null');
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = true;
//
// if (test){
//    console.log('вірно')
// }
// else{
//     console.log('невірно')
//
// }
//
// console.log(test ? 'вірно' : 'невірно');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//


// let dataCore = prompt('„Яка «офіційна» назва JavaScript?“')
// if (dataCore === 'ECMAScript'){
// console.log('«Правильно!»')
// }
// else {
//     console.log('Не знаєте? ECMAScript!')
// }
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let num = prompt('enter some num');
//
// switch (true){
//     case (num>=1 && num<=20):
//         console.log('the first one');
//         break;
//     case (num>=21 && num<=48):
//         console.log('the second one');
//         break;
//     case (num>=49 && num<=90):
//         console.log('the third one');
//         break;
//     default:
//         console.log('No REALLY');
//         break;
// }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let num = +prompt('enter some num');
// console.log(num === 10 ? 'ВІРНО' : 'НЕВІРНО');
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН


// let num = +prompt('enter weather');
//
// console.log(((num >=10&&num <= 22)) ? 'ми йдемо ВЧИТИСЯ': 'вчимося ОНЛАЙН');


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


// let num = +prompt('enter some num');
// switch (num){
//     case 1:
//         console.log('laptop');
//         break;
//     case 2:
//         console.log('mobile');
//         break;
//     case 3:
//         console.log('car');
//         break;
//     case 4:
//         console.log('house');
//         break;
//     case 5:
//         console.log('yacht');
//         break;
//     default:
//         console.log('try again');
//         break;
// }
//
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x =0;
// console.log((x !== 0) ? 'Вірно' : 'Невірно');
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = 2;
// console.log((time >= 0 && time <= 14) ? 'The first quater' : (time >= 15 && time <= 29) ? 'The second quater' : (time >= 30 && time <= 44) ? 'The third quater' : (time >= 45 && time <= 59) ? 'The last quater' : 'try some else');
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let time = 11;
// console.log((time >= 1 && time <= 10) ? 'The first decade' : (time >= 11 && time <= 20) ? 'The second decade' : (time >= 21 && time <= 31) ? 'The third decade' : 'try some else');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let num = +prompt('enter some num');
//
// switch (num){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break
//     default:
//         console.log('Something else')
//         break;
// }

//     - Користувач вводить або має два числа.

// let a = 5;
// let b = 5;

//         Потрібно знайти та вивести максимальне число з тих двох .
// console.log((a > b) ? a : (a < b) ? b :(a = b) ?'Equal numbers '+a : 'I dont know');
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
// let x = (NaN||false||null||0) || 'default';
// console.log(x);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <10; i++) {
//     document.write(`<div>Your num is</div>`)
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <10; i++) {
//     document.write(`<div>Your num is ${i}</div>`)
//
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<h1>Your num is</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<h1>Your num is ${i}</h1>`);
//     i++;
// }
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//
//     document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//     document.write(`<li> ${listOfItem} </li>`)
// }
//     document.write(`</ul>`)

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// //
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


// for (const product of products) {
//     document.write(`<div class="contain">`)
//     document.write(`<h3 class="product-title">${product.title} ${product.price}</h3>`)
//     document.write(`<img src="${product.image}" alt="vegan">`)
//     document.write(`</div>`)
// }

//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// for (const user of users) {
//     if (user.status){
//         console.log(user);
//     }
// }
// - користувачів зі статусом false
// for (const user of users) {
//     if (!user.status){
//         console.log(user);
//     }
// }
// - користувачів які старші за 30 років
// for (const user of users) {
//     if (user.age>30){
//         console.log(user);
//     }
// }

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let mas = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i = 0;
// while (i<mas.length){
//     console.log(mas[i]);
//     i++;
// }
//     2. перебрати його циклом for
// for (let i = 0; i < mas.length; i++) {
//     console.log(mas[i]);;
//
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while (i<mas.length){
//     console.log(mas[i],i);
//     i+=2;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < mas.length; i+=2) {
//     console.log(mas[i],i);;
//
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i =0;
// while (i<mas.length){
//     if (mas[i]%2===0){
//         console.log(mas[i])
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i]%2===0){
//
//     console.log(mas[i]);
//     }
//
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < mas.length; i++) {
//     if(mas[i]%3 ===0){
//         mas[i] = "okten";
//         console.log(mas[i])
//     }
//
// }
// console.log(mas);
// 8. вивести масив в зворотньому порядку.

// for (let i = mas.length - 1; i >= 0; i--) {
//     console.log(mas[i]);
//
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let i = mas.length-1;
// while (i>=0){
//     console.log(mas[i]);
//     i--;
// }

// let i = mas.length-1;
// while (i>=1){
//     console.log(mas[i]);
//     i-=2;
// }

// for (let i = mas.length - 1; i >= 1; i-=2) {
//     console.log(mas[i]);
// }






// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mas = [1,2,3,4,'5','6','7','8',true,false];
// for (const ma of mas) {
//     if (typeof ma ==="string")
//         console.log(ma)
// }

// for (const ma of mas) {
//     if (typeof ma ==="number")
//         console.log(ma)
// }
// for (const ma of mas) {
//     if (typeof ma ==="boolean")
//         console.log(ma)
// }
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let library = [
//     {name: 'Harry Potter',pagecount: 450,authors:['Joan Roaling'],genre: ['fantasy','fantastic']},
//     {name: 'Hobbit',pagecount: 550,authors:['John Tolkin'],genre: ['fantastic']},
//     {name: 'Sherlok Holmes',pagecount: 650,authors:['Arthur Conan Doyle'],genre: ['detective','fantasy','fantastic']},
//     {name: 'Tower and the witcher',pagecount: 250,authors:['Joan Geek','Marley Kot'],genre: ['drama']},
// ];
// -знайти наібльшу книжку.
// let max = library[0].pagecount;
// console.log(max)
// for (const book of library) {
//     if (book.pagecount > max){
//         max = book.pagecount;
//     }
// }
// console.log(max)


// - знайти книжку/ки з найбільшою кількістю жанрів

// let max = library[0].genre.length;
// for (const book of library) {
//     if (book.genre.length > max)
//         max = book;
// }
// console.log(max);

// - знайти книжку/ки з найдовшою назвою
// let max = library[0].name;
//
// for (const book of library) {
//     if (book.name.length > max.length){
//         max = book.name;
// }
// }
//
// console.log(max);

// - знайти книжку/ки які писали 2 автори
// for (const libraryElement of library) {
//     if (libraryElement.authors.length === 2){
//         console.log(libraryElement);
//     }
// }

// - знайти книжку/ки які писав 1 автор
// for (const libraryElement of library) {
//     if (libraryElement.authors.length === 1){
//         console.log(libraryElement);
//     }
// }

//
// 1. Створити пустий масив та :

// let mas = [];
//
// //     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 2; i < 100; i+=2) {
//     mas[i] = i;
//
// console.log(mas[i]);
// }
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let mas = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 1; i < 100; i+=2) {
//     mas[i] = i;
//
//     console.log(mas[i]);
// }
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let mas = [];
// for (let i = 0; i < 20; i++) {
//    mas[i] = Math.floor(Math.random()*20)
// }
// console.log(mas)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let mas = [];
// for (let i = 0; i < 20; i++) {
//    mas[i] = Math.floor(Math.random()*(732-8)+(8))
// }
// console.log(mas)
// // 2. Вивести за допомогою console.log кожен третій елемен
// // for (let i = 2; i < mas.length; i+=3) {
// //     console.log(mas[i])
// // }
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// // for (let i = 2; i < mas.length; i+=3) {
// //     if (mas[i]%2===0){
// //
// //     console.log(mas[i])
// //     }
// // }
//
//
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// // let testArray = [];
// // for (let i = 2; i < mas.length; i+=3) {
// //     if (mas[i]%2===0){
// //        testArray.push(mas[i]);
// //        console.log(mas[i]);
// //     }
// // }
// //
// // console.log(testArray);
//
// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i]%2===0){
//         console.log(mas[i-1]);
//     }
//
// }
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let nums = [100,250,50,168,120,345,188];
//
//     let res =0;
// for (const num of nums) {
//     res+=num
// }
//     console.log(res/nums.length)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array =[];
// let array1 =[];
// for (let i = 0; i < 15; i++){
//   array[i] = Math.floor(Math.random()*10+1);
//     (array1.push(array[i]*5));
// }
// console.log(array1);

// // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let array = [1,2,3,true,false,'10'];
// let array1 = [];
// for (let i = 0; i < array.length; i++) {
//    if (typeof array[i] === "number"){
//        array1.push(array[i])
//    }
// }
// console.log(array1);


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
// //
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
//
//
//
// let usersWithId = [
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
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city
//         }
//     }
// }
// usersWithCities.push(usersWithId)
// console.log(usersWithCities);
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

// let str = [ 'a', 'b', 'c'];
// let res = '';
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// for (let i = 0; i < str.length; i++) {
//     res += str[i];
// }
// console.log(res);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// while (i<str.length){
//     res += str[i];
//     i++;
// }
//
// console.log(res);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (const string of str) {
//         res += string;
// }
//
// console.log(res);

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let areaOfRectangle = (a,b)=>{
//     return a * b;
// }
// console.log(areaOfRectangle(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let areaOfCircle = (r)=>{
//     return r**2;
// }
// console.log(areaOfCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let areaOfcylinder = (h,r) => Math.floor(2*Math.PI * r*(r+h));
// console.log(areaOfcylinder(5,3));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let mas = [1,2,3,4,5,6,7,8,9,0];
//
// let reader = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// reader(mas);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let txt = 'lorem ipsum';
// let paragraph = (str)=>{
//     document.write(`<p>${txt}</p>`);
// }
//  paragraph(txt);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let txt = 'lorem ipsum';

// let textedit =(str)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${str}</li>
//                     <li>${str}</li>
//                     <li>${str}</li>`)
//     document.write(`</ul>`)
// }
// textedit(txt);
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let txt = 'lorem ipsum';
//
//
// let textEditor = (str,n)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${str} ${i}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// textEditor(txt,10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let massive = [1,2,3,'4','5',true,false];
// let pretenderFunc =(array)=>{
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// pretenderFunc(massive);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let massive0 = [
//     {id: 1, name: 'vasya', age: 25},
//     {id: 2, name: 'petya', age: 23},
//     {id: 3, name: 'kolya', age: 27}
// ];
//
// let outputFunc = (massive0)=>{
//     for (const massive0Element of massive0) {
//    document.write(`<div>${massive0Element.id} ${massive0Element.name} ${massive0Element.age}</div>`);
//     }
// }
// outputFunc(massive0);
// - створити функцію яка повертає найменше число з масиву
// let massive = [1,2,3,6,5,3,1,0];
//
// let minNumFinder = (array)=>{
//     let res = array[0];
//     for (let i = 0; i < array.length; i++) {
//      if (array[i]<res){
//          res = array[i];
//      }
//     }
//     return res;
// }
// console.log(minNumFinder(massive));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let massive = [1,2,3,6,5,3,1,0];
//
// let sumFunc = (array)=>{
//     let res= 0;
//     for (const arrayElement of array) {
//         res+=arrayElement;
//     }
//     return res;
// }
// console.log(sumFunc(massive));



// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumFinder = (a,b,c)=>{
//     let newList = [];
//     let res = a;
//     newList.push(a,b,c);
//     for (let i = 0; i < newList.length; i++) {
//      if (newList[i]<res){
//          res = newList[i];
//      }
//     }
//     return res;
// }
// console.log(minNumFinder(1,0,3));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumFinder = (a,b,c)=>{
//     let newList = [];
//     let res = b;
//     newList.push(a,b,c);
//     for (let i = 0; i < newList.length; i++) {
//         if (newList[i]>res){
//             res = newList[i];
//         }
//     }
//     return res;
// }
// console.log(maxNumFinder(1,10,3));

// - створити функцію яка повертає найбільше число з масиву
// let massive = [1,2,3,6,5,3,1,0];
//
// let maxNumFinder = (array)=>{
//     let res = array[0];
//     for (let i = 0; i < array.length; i++) {
//      if (array[i]>res){
//          res = array[i];
//      }
//     }
//     return res;
// }
// console.log(maxNumFinder(massive));

// - створити функцію яка повертає найменше число з масиву
// let massive = [1,2,3,6,5,3,1,0];
//
// let minNumFinder = (array)=>{
//     let res = array[0];
//     for (let i = 0; i < array.length; i++) {
//      if (array[i]<res){
//          res = array[i];
//      }
//     }
//     return res;
// }
// console.log(minNumFinder(massive));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
// let massive = [1,2,3,6,5,3,1,0];
//
// let funcSum = (array)=>{
//     let res =0;
//     for (const arrayElement of array) {
//         res+=arrayElement;
//     }
//     return res;
// }
//
// console.log(funcSum(massive));
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// function vuvidN(n){
//     for (let i = 1; i < n; i++) {
//         console.log(i);
//     }
// }
// vuvidN(10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let writer=(a,b)=>{
//     if (a<b){
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//
//         }
//     }
//     else {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//
//         }
//     }
// }
// writer(7,4);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let mas = [1,2,3,4,5,6,7,8,9,0];
// console.log(mas);
// let readerUpgraded = (arr,i) => {
//     let tmp =  0;
//     for (let u = 0; u < arr.length; u++) {
//         if (i===u){
//             tmp = arr[u];
//             arr[u] = arr[u+1];
//             arr[u+1] = tmp;
//             console.log(arr);
//         }
//     }
// }
// readerUpgraded(mas,0)


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


//
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
//     let zerocount = newMassive.length
//
//     for (let i = 0; i < count; i++) {
//         newMassive[zerocount++]=0;
//     }
//     console.log(newMassive);
// }
// appendMaybe(massive);






// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
//
// let user1 = new User(39,'vasya','vasya','gtgtgt@vfvf.com',3809978656)
// let user2 = new User(54,'vasya','vasya','gtgtgt@vfvf.com',3809924456)
// let user3 = new User(34,'vasya','vasya','gtgtgt@vfvf.com',3809945656)
// let user4 = new User(24,'vasya','vasya','gtgtgt@vfvf.com',3809978456)
// let user5 = new User(14,'vasya','vasya','gtgtgt@vfvf.com',3809934556)
//
//
// array.push(user1,user2,user3,user4,user5);
// console.log(array);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sorter = array.sort((a, b) => a.id - b.id);
// console.log(sorter);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//     }
//
// }

// let array = [];

// let user1 = new Client(39,'vasya','vasya','gtgtgt@vfvf.com',3809978656,[12,3,4,5])
// let user2 = new Client(54,'vasya','vasya','gtgtgt@vfvf.com',3809924456,[324,4,5,6])
// let user3 = new Client(34,'vasya','vasya','gtgtgt@vfvf.com',3809945656,[3])
// let user4 = new Client(24,'vasya','vasya','gtgtgt@vfvf.com',3809978456,[2,3])
// let user5 = new Client(14,'vasya','vasya','gtgtgt@vfvf.com',3809934556,[33])

// array.push(user1,user2,user3,user4,user5);
// console.log(array);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sorterOfOrders = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sorterOfOrders);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car (model,producer,date,maxSpeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.date = date;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         return `їдемо зі швидкістю ${maxSpeed} на годину`
//     }
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey]!=="function"){
//                 console.log(`${carKey} --- ${this[carKey]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         return this.maxSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.date = newValue;
//         return this.date;
//     }
//     this.addDriver = function (driver)  {
//         this.driver = driver;
//         return this.driver;
//     }
// }
//
// let car1 = new Car('Mercedes','Germany',2021,230,3.5);
// let driver1 = {name: 'Petro', age: 25, experience: 3};
// //
// console.log(car1.drive());
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2022);
// car1.info();
// console.log(car1.addDriver(driver1));
// console.log(car1);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class Car{
//
//     constructor(model,producer,date,maxSpeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.date = date;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
// }
//     drive() {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//     info() {
//         for (const carKey in this) {
//             if (typeof this[carKey]!=="function"){
//                 console.log(`${carKey} --- ${this[carKey]}`);
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         return this.maxSpeed
//     }
//     changeYear(newValue) {
//         this.date = newValue;
//         return this.date;
//     }
//     addDriver(driver)  {
//         this.driver = driver;
//         return this.driver;
//     }
// }

// let car1 = new Car('Mercedes','Germany',2021,230,3.5);
// let driver1 = {name: 'Petro', age: 25, experience: 3};
//
// console.log(car1.drive());
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2022);
// car1.info();
// console.log(car1.addDriver(driver1));
// console.log(car1);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderellas = [];
//
// let cinderella1 = new Cinderella('Anna',34,36);
// let cinderella2 = new Cinderella('Anna',24,32);
// let cinderella3 = new Cinderella('Anna',34,43);
// let cinderella4 = new Cinderella('Anna',31,37);
// let cinderella5 = new Cinderella('Anna',32,38);
// let cinderella6 = new Cinderella('Anna',33,34);
// let cinderella7 = new Cinderella('Anna',34,38);
// let cinderella8 = new Cinderella('Anna',34,42);
// let cinderella9 = new Cinderella('Anna',34,40);
// let cinderella10 = new Cinderella('Anna',34,39);
//
// cinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
//
// class Prince extends Cinderella{
//
//     constructor(name, age, shoeSize) {
//         super(name,age)
//         this.shoeSize = shoeSize;
//     }
// }
//
// let prince1 = new Prince('Dan',34,37);
//
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince1.shoeSize){
//         console.log(cinderella);
//     }
// }
//
//     // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let finder = cinderellas.find(value => value.footSize === prince1.shoeSize);
// console.log(finder);



// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// class CEO {
//     constructor(id,name,username,email,address,phone,website,company) {
// this.id = id;
// this.name = name;
// this.username = username;
// this.email = email;
// this.address = {`street: ${this.street}, suite: this.suite`};
// this.phone = phone;
// this.website = website;
// this.company = company;
//
//
//     }
// }
//
// let ceo1 = new CEO(1,'Leanne Graham','Bret','Sincere@april.biz',{street:'Kulas Light',suite:'Apt. 556',city:'Gwenborough',zipcode: '92998-3874',geo:{ lat: '-37.3159',lng: '81.1496'}}, '1-770-736-8031 x56442', 'hildegard.org',{name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'})
// console.log(ceo1);



// class CEO {
//     constructor(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,comName,catchPhrase,bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {street,suite,zipcode};
//         this.geo = {lat,lng};
//         this.phone = phone;
//         this.website = website;
//         this.company = {comName,catchPhrase,bs};
//     }
// }
//
// let ceo1 = new CEO(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556',
//     'Gwenborough', '92998-3874', '-37.3159', '81.1496','1-770-736-8031 x56442', 'hildegard.org','Romaguera-Crona',
//         'Multi-layered client-server neural-net', 'harness real-time e-markets')
// console.log(ceo1);


//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу

// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
