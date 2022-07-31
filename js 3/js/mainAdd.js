// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3){
//     document.write("That was too much");
// }
// else{
//     document.write('Too small one');
// }
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// a = +prompt('enter some number');
// b = +prompt('enter some number');
// c = +prompt('enter some number');
// if ((a>b && a<c) || (a < b && a > c)){
//     document.write('The middle number is ',a +'<br/>');
//     document.write('the first number between');
// }
// else if ((b>a && b<c) || (b < a && b > c)){
//     document.write('The middle number is ',b);
// }
// else{
//     document.write('The middle number is ',c);
// }
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let a1 =  2;
// let b1 =  1;
// let result;
// (a1 + b1 < 4)? result = 'Мало': result = 'Багато';
// console.log(result);
//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let numka = +prompt('enter some number from -100 till 100');
// switch (true){
//     case (numka < 0 && numka >= -100):
//         document.write('negative');
//         break;
//     case (numka > 0 && numka <= 100):
//         document.write('positive');
//         break;
//     case (numka === 0):
//         document.write('equal 0');
//         break;
//     default:
//     console.log(' ????');
// }
//         (numka < 0 && numka >= -100)? numka = 'negative':(numka > 0 && numka <= 100)? numka = 'positive':(numka === 0)? numka ='equal 0':numka = '???';
//
//         document.write(numka)



// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)


// let test = confirm('something');
// let word;
// if (test){
//     word ='Вірно';
// }
// else{
//     word = 'Неправильно';
// }
// document.write(word);


//з коротким записом(тернаркою)
// let test = confirm('something');
// let word;
// test? word ='Вірно': word = 'Неправильно';
// document.write(word);


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let quest = prompt('Яка «офіційна» назва JavaScript?');
// if (quest === 'ECMAScript'){
//     document.write('«Правильно!»')
// }
// else{
//     document.write('Не знаєте? ECMAScript!')
// }



//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let apart_num = +prompt('enter your apartment number');
// switch (true){
//     case (apart_num >= 1 && apart_num <= 20):
//         document.write('The first entrance');
//         break;
//     case (apart_num >= 21 && apart_num <= 48):
//         document.write('The second entrance');
//         break;
//     case (apart_num >= 49 && apart_num <= 90):
//         document.write('The third entrance');
//         break;
//     default:
//     console.log(' ????');
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('Enter some number');
// (number == 10)? number = 'ВІРНО':number = 'НЕВІРНО';
// document.write(number)


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temp = +prompt('Choose the temperature you need)');
// (temp >= 10 && temp <= 22)? temp = 'Ми йдемо ВЧИТИСЯ': temp = 'ВЧИМОСЯ ОНЛАЙН';
// document.write(temp);

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let quiz_num = +prompt('enter your apartment number');
// switch (true){
//     case (quiz_num === 1):
//         document.write('Your prize is a new iphone 13 pro max! CONGRATULATIONS!');
//         break;
//     case (quiz_num === 2):
//         document.write('Your prize is a new sport-car! CONGRATULATIONS!');
//         break;
//     case (quiz_num === 3):
//         document.write('Your prize is a new video-card! CONGRATULATIONS!');
//         break;
//     case (quiz_num === 4):
//         document.write('Your prize is a new music column! CONGRATULATIONS!');
//         break;
//     case (quiz_num === 5):
//         document.write('Your prize is a new pc! CONGRATULATIONS!');
//         break;
//
//     default:
//     document.write('The number is incorrect!(');
// }