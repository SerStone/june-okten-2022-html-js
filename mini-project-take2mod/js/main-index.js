fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response)=>response.json())
.then(users =>{
    let container = document.createElement("div");
    container.classList.add('container')

    for (const user of users) {

        let contain = document.createElement("div");
        contain.classList.add('contain');
        contain.innerText = `${user.id} ${user.name}`;

        let a = document.createElement("a");
        a.href = `user-details.html?id=${user.id}`;
        a.innerText ='Go';

        let button =document.createElement("button");
        button.appendChild(a)
        contain.appendChild(button);
        container.appendChild(contain);

    }
            document.body.appendChild(container);
});