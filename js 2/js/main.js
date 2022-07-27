// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент у консоль
// - Створити 3 об'єкти, які описують книги. Поля об'єкта : назва, кількість сторінок, жанр.
// - Створити 3 об'єкти, які описують книги. Поля об'єкта : назва, кількість сторінок, жанр, автори. Поле "автори" - масив. Кожен автор має поля ім'я, вік
// - Створити масив з 10 об'єктами, які описують сутність "користувача". Поля: ім'я, ім'я користувача, пароль. Перейти в консоль пароля кожного користувача


let array = [1,2,3,4,'five','six','seven','eight',true,false];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);


let book1 = {
    name: 'Harry Potter',
    pagecount: 450,
    genre: 'fantasy'
};

let book2 = {
    name: 'Hobbit',
    pagecount: 550,
    genre: 'fantastic'
};

let book3 = {
    name: 'Sherlock Holmes',
    pagecount: 350,
    genre: 'detective'
};

console.log(book1);
console.log(book2);
console.log(book3);


book1 = {
    name: 'Harry Potter',
    pagecount: 450,
    genre: 'fantasy',
    authors : [
        {
            name : 'Joan Rolling',
            age: 52
        },
        {
            name : 'John Tolkien',
            age : 75
        },
        {
            name : 'Arthur Conan Doyle',
            age : 71
        }
    ]
};

book2 = {
    name: 'Hobbit',
    pagecount: 550,
    genre: 'fantastic',
    authors : [
        {
            name : 'Joan Rolling',
            age: 52
        },
        {
            name : 'John Tolkien',
            age : 75
        },
        {
            name : 'Arthur Conan Doyle',
            age : 71
        }
    ]
};

book3 = {
    name: 'Sherlock Holmes',
    pagecount: 350,
    genre: 'detective',
    authors : [
        {
            name : 'Joan Rolling',
            age: 52
        },
        {
            name : 'John Tolkien',
            age : 75
        },
        {
            name : 'Arthur Conan Doyle',
            age : 71
        }
    ]
};
console.log(book1,book1.authors[0]);
console.log(book2,book2.authors[1]);
console.log(book3,book3.authors[2]);



let users = [
    {name: 'John', username: 'jok', pasword: '234kk5'},
    {name: 'Mike', username: 'mik', pasword: '245j425'},
    {name: 'Petro', username: 'pet', pasword: '877878m'},
    {name: 'Billy', username: 'bil', pasword: '8687hy'},
    {name: 'Herbert', username: 'her', pasword: '678j67'},
    {name: 'Oleg', username: 'legi', pasword: 'sdk8678m'},
    {name: 'Mark', username: 'marik', pasword: 's8786dkm'},
    {name: 'Sara', username: 'ser', pasword: 'uj77ujkm'},
    {name: 'Anna', username: 'ann', pasword: 'sjmmdk6j6j6m'},
    {name: 'Oksana', username: 'ksen', pasword: 'ujuuk77m'}];


console.log(users[0].pasword);
console.log(users[1].pasword);
console.log(users[2].pasword);
console.log(users[3].pasword);
console.log(users[4].pasword);
console.log(users[5].pasword);
console.log(users[6].pasword);
console.log(users[7].pasword);
console.log(users[8].pasword);
console.log(users[9].pasword);
