// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let mas = [];
//
// function User(id,name,surname,email,phone) {
//     this.id =id;
//     this.name =name;
//     this.surname =surname;
//     this.email =email;
//     this.phone =phone;
//     mas.push(this)
//     // console.log(this);
//
// }
// new User(1,'Harry','Potter','harik@gmail.com',38065735)
// new User(3,'Sarah','Noi','sara77@gmail.com',38086535)
// new User(4,'Willie','Whisley','simpson@gmail.com',380348735)
// new User(2,'Ron','Whisley','ronin@gmail.com',38098735)
// new User(5,'Ben','Skywalker','jedifallen@gmail.com',38023435)
// new User(7,'Jessy','Pincman','jspin@gmail.com',380922735)
// new User(8,'Soul','Goodman','bettercallsoul@gmail.com',38023735)
// new User(9,'Gustavo','Frieng','gus00@gmail.com',38098235)
// new User(10,'Hector','Salamanca','heki@gmail.com',38045735)
// new User(6,'Walter','White','heisenberg@gmail.com',38092335)
//
// console.log(mas);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = mas.filter(value => {if (value.id%2===0){console.log(value)}})
// console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sorter = mas.sort((a, b) => {return a.id - b.id})
// console.log(sorter);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// let client = [];
//
// class Client {
//     constructor(id,name,surname ,email,phone,order) {
//
//     this.id =id;
//     this.name =name;
//     this.surname =surname;
//     this.email =email;
//     this.phone =phone;
//     this.order =order;
//
//     client.push(this);
//     }
// }
//
// new Client(1,'Harry','Potter','harik@gmail.com',38065735,['car','toys','magic wand'])
// new Client(3,'Sarah','Noi','sara77@gmail.com',38086535,['car','toys','phone'])
// new Client(4,'Willie','Whisley','simpson@gmail.com',380348735,['car','toys'])
// new Client(2,'Ron','Whisley','ronin@gmail.com',38098735,['car','toys'])
// new Client(5,'Ben','Skywalker','jedifallen@gmail.com',38023435,['car','toys'])
// new Client(7,'Jessy','Pincman','jspin@gmail.com',380922735,['car','toys','house'])
// new Client(8,'Soul','Goodman','bettercallsoul@gmail.com',38023735,['car','toys'])
// new Client(9,'Gustavo','Frieng','gus00@gmail.com',38098235,['car','toys'])
// new Client(10,'Hector','Salamanca','heki@gmail.com',38045735,['car','toys'])
// new Client(6,'Walter','White','heisenberg@gmail.com',38092335,['car','toys','magic wand'])
//
//
// console.log(client);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sorter = client.sort((a, b) => {return a.order.length - b.order.length})
//
// console.log(sorter);
//



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model,yearOfCreation,maxSpeed,engineCapasity,driver) {
//     this.model = model;
//     this.yearOfCreation =yearOfCreation;
//     this.maxSpeed =maxSpeed;
//     this.engineCapasity =engineCapasity;
//     this.driver = driver;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//
//     this.info = function (){
//
//         console.log(`model - ${this.model} yearOfCreation - ${this.yearOfCreation} maxSpeed - ${this.maxSpeed} engineCapasity ${this.engineCapasity}`);
//         // console.log(Object.entries({model:`${model}`,yearOfCreation:`${yearOfCreation}`,maxSpeed:`${maxSpeed}`,engineCapasity:`${engineCapasity}`}))
//     }
//   this.increaseMaxSpeed = function (newSpeed){
//       this.maxSpeed += newSpeed;
//      console.log(`New speed is ${this.maxSpeed}`);
// }
//     this.changeYear= function (newValue){
// if (newValue){
//     this.yearOfCreation = newValue;
//     console.log(`model - ${this.model} yearOfCreation - ${this.yearOfCreation} maxSpeed - ${this.maxSpeed} engineCapasity ${this.engineCapasity}`);
//     // console.log(Object.entries({model:`${model}`,yearOfCreation:`${yearOfCreation}`,maxSpeed:`${maxSpeed}`,engineCapasity:`${engineCapasity}`}));
// }
//     }
//     this.addDriver= function (drivery){
//         this.driver = drivery;
//         console.log(this);
//   driver = {name: name,age: age,experience: experience}
// console.log(Object.entries({model:`${model}`,yearOfCreation:`${yearOfCreation}`,maxSpeed:`${maxSpeed}`,engineCapasity:`${engineCapasity}`,driver: {driver}}))
// console.log(this)
//     }
//
// }


// let car1 = new Car('BMX X5',2015,230,4.5,'null')
//
// console.log(car1);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// car1.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// car1.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// car1.increaseMaxSpeed(20);

// -- changeYear (newValue) - змінює рік випуску на значення newValue


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// let driverUpg = {name:'Harry',age:23,experience:5}
// car1.addDriver(driverUpg)


// - (Те саме, тільки через клас)

// class Car{
//     constructor(model,yearOfCreation,maxSpeed,engineCapasity,driver) {
//     this.model = model;
//     this.yearOfCreation =yearOfCreation;
//     this.maxSpeed =maxSpeed;
//     this.engineCapasity =engineCapasity;
//     this.driver = driver;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info(){
//
//         console.log(`model - ${this.model} yearOfCreation - ${this.yearOfCreation} maxSpeed - ${this.maxSpeed} engineCapasity ${this.engineCapasity}`);
//         // console.log(Object.entries({model:`${model}`,yearOfCreation:`${yearOfCreation}`,maxSpeed:`${maxSpeed}`,engineCapasity:`${engineCapasity}`}));
//     }
//   increaseMaxSpeed(newSpeed){
//       this.maxSpeed += newSpeed;
//      console.log(`New speed is ${this.maxSpeed}`);
// }
//     changeYear(newValue) {
//             this.yearOfCreation = newValue;
//             console.log(`model - ${this.model} yearOfCreation - ${this.yearOfCreation} maxSpeed - ${this.maxSpeed} engineCapasity ${this.engineCapasity}`);
//             // console.log(Object.entries({model:`${model}`,yearOfCreation:`${yearOfCreation}`,maxSpeed:`${maxSpeed}`,engineCapasity:`${engineCapasity}`}));
//
//     }
//     addDriver(smb){
//         this.driver =smb;
//       console.log(this);
//     }
// }
// let car1 = new Car('BMX X5',2015,230,4.5,'none')
//
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2022)
// let person ={name:'Harry',age:23,experience:5}
// car1.addDriver(person)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// let mas = [];
// function Girls(name,age,sizeOfleg) {
//     this.name =name;
//     this.age =age;
//     this.sizeOfleg =sizeOfleg;
//
//     mas.push(this)
// }
// new Girls('Anna',22,40)
// new Girls('Ira',24,39)
// new Girls('Sarah',32,43)
// new Girls('Mia',23,39)
// new Girls('Jaine',21,38)
// new Girls('Tess',20,39)
// new Girls('Nancy',27,41)
// new Girls('Kate',26,39)
// new Girls('Judith',28,42)
// new Girls('Kira',21,40)
//
// // console.log(mas);
//
//
// let prince = {name:'Garold',age:25,shoe:38}

// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (const ma of mas) {
//     if (prince.shoe === ma.sizeOfleg){
//         console.log(`Your princess is ${ma.name}`)
//     }
// }

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// console.log(mas.find(value => value.sizeOfleg === prince.shoe));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function callback(smb){
//     return smb.sizeOfleg = prince.shoe
// }
// /////
// console.log(mas.find(value =>callback(value)));