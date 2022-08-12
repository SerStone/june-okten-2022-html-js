// - Знайти та вивести довижину настипних стрінгових значень
//     let strA= 'hello world';
//     let strB=  'lorem ipsum';
//     let strC= 'javascript is cool';
// console.log(strA.length,strB.length,strC.length);

let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
str.forEach(value => console.log(value.length));


// - Перевести до великого регістру наступні стрінгові значення

// let strA= 'hello world';
// let strB=  'lorem ipsum';
// let strC= 'javascript is cool';
// console.log((strA).toUpperCase());
// console.log((strB).toUpperCase());
// console.log((strC).toUpperCase());


// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach(value => console.log(value.toUpperCase()));



// - Перевести до нижнього регістру настипні стрінгові значення
// let strA= 'HELLO WORLD';
// let strB=  'LOREM IPSUM';
// let strC= 'JAVASCRIPT IS COOL';
// console.log((strA).toLowerCase());
// console.log((strB).toLowerCase());
// console.log((strC).toLowerCase());

// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// str.forEach(value => {console.log(value.toLowerCase())});


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.indexOf('g'));
// let newStr = (str.substring(1, 13));
// console.log(newStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let splittedStr = str.split(' ')
// console.log(splittedStr);

// let str = 'Ревуть воли як ясла повні';
// function stringToarray(value){
//     return value.split(' ')
//
// }
//
// console.log(stringToarray(str));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let inti = [10,8,-7,55,987,-1011,0,1050,0];
// let str = inti.map((value) => value+"");
// console.log(str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(array,direction){
//     if(direction === 'ascending'){
//         console.log(array.sort((a, b) => {
//             return a - b
//         }));
//     }
//     if (direction === 'descending'){
//         console.log(array.sort((a, b) => {
//             return b - a
//         }));
//     }
// }
//
// sortNums(nums, 'ascending');


//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration
// }));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
//
// описати колоду карт

// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
//
// ];


// - знайти піковий туз

// console.log(cards.find(value => value.cardSuit === 'spades' && value.value === 'Ace'));

// - всі шістки
// console.log(cards.filter(value => value.value === 6));


// - всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));


// - всі буби
// console.log(cards.filter(value => value.cardSuit === 'diamonds'));


// - всі трефи від 9 та більше
// let moreThan9nums = cards.filter(value => value.value >= 9 && value.cardSuit ==='clubs');
// console.log(moreThan9nums);
// let moreThan10str = cards.filter(value => value.cardSuit === 'clubs'&&typeof value.value === "string");
// console.log(moreThan10str);
// let concat = moreThan9nums.concat(moreThan10str);
// console.log(concat);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduceCards = cards.reduce(function (accumulator,card){
//     if (card.cardSuit === 'spades'){
//         accumulator.cardsSpades.push(card)
//     }
//     else if (card.cardSuit === 'hearts'){
//         accumulator.cardsHearts.push(card)
//     }
//     else if (card.cardSuit === 'clubs'){
//         accumulator.cardsClubs.push(card)
//     }
//     else if (card.cardSuit === 'diamonds'){
//         accumulator.cardsDiamonds.push(card)
//     }
//     else{
//         accumulator.cardsWihoutSuit.push(card)
//     }
//     return accumulator;
// },{cardsSpades:[],cardsDiamonds:[],cardsClubs:[],cardsHearts:[],cardsWihoutSuit:[]})
//
// console.log(reduceCards);