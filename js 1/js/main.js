// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let hello,owu,com,ua,first,tenth,minus,plus,third,second,sixth,good,bad;
hello = 'hello';
console.log(hello)
document.write(hello+"<br/>")
alert(hello)

owu = `owu`;
console.log(owu);
document.write(owu+"<br/>");
alert(owu);

com = "com";
console.log(com);
document.write(com+"<br/>");
alert(com);

ua = 'ua';
console.log(ua);
document.write(ua+"<br/>");
alert(ua);

first = 1;
console.log(first);
document.write(first+"<br/>");
alert(first);

tenth = 10;
console.log(tenth);
document.write(tenth+"<br/>");
alert(tenth);

minus = -999;
console.log(minus);
document.write(minus+"<br/>");
alert(minus);

plus = 123;
console.log(plus);
document.write(plus+"<br/>");
alert(plus);

third = 3.14;
console.log(third);
document.write(third+"<br/>");
alert(third);

second = 2.7;
console.log(second);
document.write(second+"<br/>");
alert(second);

sixth = 16;
console.log(sixth);
document.write(sixth+"<br/>");
alert(sixth);

good = true;
console.log(good);
document.write(good+"<br/>");
alert(good);

bad = false;
console.log(bad);
document.write(bad);
alert(bad);

let firstName, middleName, lastName;
lastName = 'Markevych';
firstName = 'Mykhailo';
middleName = 'Volodymyrovtch';

let  person;
person = `${lastName} ${firstName} ${middleName}`;
console.log(person);


let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);


let year = 2002+'';
let inputData = prompt('Input your name',firstName);
console.log(inputData+"");
let inputData1 = prompt('Input your surname',lastName);
console.log(inputData1+"");
let inputData2 = prompt('Input your dateofbirth',year);
console.log(inputData2+"");