let users =  JSON.parse(localStorage.getItem('users'));

users.forEach(user => {
    let container = document.createElement("div");
    container.classList.add('container');

    let header = document.createElement('div')
    header.classList.add('header')

    function iterate(obj) {
        for (let property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    iterate(obj[property]);
                }
                else {
                    let div = document.createElement("div");
                    div.classList.add('add');
                    div.innerText =  (property + " -- " + obj[property]);
                    header.appendChild(div);
                }
            }
        }
    }

    iterate(user);
    container.appendChild(header);

    let a = document.createElement("a");
    a.href = "./user-details.html"
    a.title = 'post of current user'
    a.text = 'post of current user'

    let button =document.createElement("button");
    button.classList.add('post');
    button.appendChild(a);
    container.append(button);

    let title = document.createElement("div");
    title.classList.add('title');

    button.onclick = function (e){

        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => posts.forEach(post => {

                if (post.userId === user.id) {

                    let contain = document.createElement("div");
                    contain.classList.add('contain');
                    contain.innerText = `title -- ${post.title}`;

                    let aa = document.createElement("a");
                    aa.href = "./post-details.html"
                    aa.title = 'Go'
                    aa.text = 'Go'

                    let buttons = document.createElement("button");
                    buttons.classList.add('buttons');
                    buttons.appendChild(aa);
                    contain.appendChild(buttons);

                    buttons.onclick = function (){

                        let array = JSON.parse(localStorage.getItem('posts')) || [];
                        array.push(post);
                        localStorage.setItem('posts',JSON.stringify(array));
                    }
                    title.appendChild(contain);
                }
                button.disabled = true;
            }))
    }
    container.appendChild(title)
    document.body.appendChild(container);
})