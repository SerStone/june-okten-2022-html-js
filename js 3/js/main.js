// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('enter some number');
//
// let x = a;
//
// if (x !== 0){
//     console.log('Вірно');
//     document.write('Вірно'+'<br/>');
// }
// else {
//     console.log('Невірно');
//     document.write('Невірно'+'<br/>');
// }




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter some number from 0 till 59');
// switch (true) {
//     case (time >=0 && time <=14):
//         console.log('the first quarter');
//         document.write('the first quarter'+'<br/>');
//         break;
//     case (time >=15 && time <=30):
//         console.log('the second quarter');
//         document.write('the second quarter'+'<br/>');
//         break;
//     case (time >=31 && time <=44):
//         console.log('the third quarter');
//         document.write('the third quarter'+'<br/>');
//         break;
//     case (time >=45 && time <=59):
//         console.log('the fourth quarter');
//         document.write('the fourth quarter'+'<br/>');
//         break;
//     default:
//         console.log('????');
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('enter some number from 1 till 31');
// switch (true) {
//     case (day >=1 && day <=10):
//         console.log(' the first decade');
//         document.write(' the first decade'+'<br/>');
//         break;
//     case (day >=11 && day <=20):
//         console.log(' the second decade');
//         document.write(' the second decade'+'<br/>');
//         break;
//     case (day >=21 && day <=31):
//         console.log(' the third decade');
//         document.write(' the third decade'+'<br/>');
//         break;
//     default:
//         console.log(' ????');
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let schedul = +prompt('enter the sequence number of week');
// switch (schedul) {
//     case 1:
//         console.log('Monday: To play on the violin.');
//         document.write('Monday: To play on the violin.'+'<br/>');
//         break;
//     case 2:
//         console.log('Tuesday: Complete programming tasks.');
//         document.write('Tuesday: Complete programming tasks.'+'<br/>');
//         break;
//     case 3:
//         console.log('Wednesday: To play basketball with friends.');
//         document.write('Wednesday: To play basketball with friends.'+'<br/>');
//         break;
//     case 4:
//         console.log('Thursday: To play basketball with friends');
//         document.write('Thursday: To play basketball with friends'+'<br/>');
//         break;
//     case 5:
//         console.log('Friday: To make up a new idea about improving my English.');
//         document.write('Friday: To make up a new idea about improving my English.'+'<br/>');
//         break;
//     case 6:
//         console.log('Saturday: To play Dota 2 with friend.');
//         document.write('Saturday: To play Dota 2 with friend.'+'<br/>');
//         break;
//     case 7:
//         console.log('Sunday: To go to the church with family.');
//         document.write('Sunday: To go to the church with family.'+'<br/>');
//         break;
//     default:
//         console.log('I dont understand you((');
//         document.write('I dont understand you(('+'<br/>');
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let m = +prompt('enter the first number');
// let n = +prompt('enter the second number');
// if(m>n) {
//
//     document.write('maximum is ',m+'');
// }
// else if (m<n){
//     document.write('maximum is ',n+'');
// }
// else if (m === n){
//     document.write('EQUAL NUMBERS TRY AGAIN!');
// }
// else {
//     document.write('You need to enter some number!');
// }
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let xx = (prompt('add some'));
// if (xx === 'null' || xx === 'undefined' || xx === '0' || xx ===''||xx ==='undefined'||xx ==='Nan'||xx ==='false'){
//     xx = 'default ';
//     document.write(xx);
// }
// else{
//     document.write('Sense good ',xx)
// }
// console.log(xx);
