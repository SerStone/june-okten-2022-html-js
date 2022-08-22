// - є масив



// console.log(document);
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
//
// let target = document.getElementsByClassName('header')[0];
//
//
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member')
//
// let simpsonName = document.createElement('h2');
// simpsonName.innerText = simpson.name+' '+simpson.surname+' '+simpson.age;
// div.appendChild(simpsonName);
//     target.appendChild(div);
//
//     let simpInfo = document.createElement("p");
//     simpInfo.innerText = simpson.info;
//     div.appendChild(simpInfo);
//
//
//     let simpImg  =document.createElement("img");
//     simpImg.src = simpson.photo;
//     div.appendChild(simpImg);
//
//
//     target.appendChild(div);
// }
//
//




// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//
//
// Цикл в циклі
// - Є масив
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
// let target = document.getElementsByClassName('header')[0];
// for (const coursesArrayElement of coursesArray) {
//         let divCourse = document.createElement('div');
//     divCourse.classList.add('course');
//
// let title = document.createElement("div");
//     title.innerText = coursesArrayElement.title;
//     title.classList.add('title');
//     divCourse.appendChild(title);
//
//     let duration = document.createElement("div");
//     duration.classList.add('duration');
//
//     let monthDuration = document.createElement("div");
//     monthDuration.innerText = `monthDuration - ${coursesArrayElement.monthDuration}`;
//     monthDuration.classList.add('monthDuration');
//
//     let hourDuration = document.createElement("div");
//     hourDuration.innerText = `hourDuration - ${coursesArrayElement.hourDuration}`;
//     hourDuration.classList.add('hourDuration');
//
//
//     divCourse.appendChild(duration);
//     duration.appendChild(monthDuration);
//     duration.appendChild(hourDuration);
//
//     let modules = document.createElement("div");
//     modules.classList.add('modules');
//     divCourse.appendChild(modules);
//     for (const module of coursesArrayElement.modules) {
//
//     target.appendChild(divCourse);
//     let moduled = document.createElement("div");
//     moduled.innerText = `module - ${module}`;
//     moduled.classList.add('module');
//     modules.appendChild(moduled);
//     }
//
// }

//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



// let div = document.createElement("div");
// div.innerText = 'Asus in search of incredible!';
// div.classList.add('wrap','collapse','alpha','beta');
//
//
// console.log(div.classList)
// document.body.prepend(div);
// document.body.appendChild(div.cloneNode(true))
//
//


//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// resolve в template1.html


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement("div");
//
//     div.innerText = `title - ${coursesAndDurationArrayElement.title}
//     monthDutation - ${coursesAndDurationArrayElement.monthDuration}`
//     div.classList.add('course')
//     document.body.append(div)
// }
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement("div");
//     div.classList.add('course');
//
//     let heading = document.createElement("h1");
//     heading.innerText = coursesAndDurationArrayElement.title;
//     heading.classList.add('heading');
//     div.appendChild(heading);
//
//     let description = document.createElement("p");
//     description.innerText = `monthDuration --- ${coursesAndDurationArrayElement.monthDuration}`;
//     description.classList.add('description');
//     div.appendChild(description);
//
//
//
//
//     document.body.append(div);
// }


// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

// document.getElementById('invisible').onclick = function() {
//     document.getElementById('text').hidden = true;
// }
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

// let form = document.createElement("form");
// form.name = 'f1';
// document.body.append(form);
//
// let input = document.createElement('input');
// form.append(input)
//
// let button = document.createElement('button');
// button.innerText = 'submit';
// form.append(button);
//
// let form1 = document.forms.f1
//
// form1.onsubmit = function (e){
//     e.preventDefault();
//     if (input.value >= 18){
//         console.log(true);
//     }
//     else if (input.value < 18){
//         console.log(false);
//     }
//
// }






// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)



//
// let form = document.createElement("form");
// form.name = 'f1';
// document.body.append(form);
// //
// let input1 = document.createElement('input');
// form.append(input1);
//
// let input2 = document.createElement('input');
// form.append(input2);
// //
// let input3 = document.createElement('input');
// form.append(input3);
// //
// let button = document.createElement('button');
// button.innerText = 'submit';
// form.append(button);
// let form1 = document.forms.f1;
//
// form1.onsubmit = function (e){
//     e.preventDefault();
//
//     const table = document.createElement("table");
//     const tbody = document.createElement("tbody");
//
//
//     for (let i = 0; i < input1.value; i++) {
//
//         const row = document.createElement("tr");
//
//         for (let j = 0; j < input2.value; j++) {
//
//             const cell = document.createElement("td");
//             const cellText =document.createElement("h2");
//             cellText.innerText = input3.value
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//         }
//         tbody.appendChild(row);
//     }
//     table.appendChild(tbody);
//     document.body.appendChild(table);
// }





