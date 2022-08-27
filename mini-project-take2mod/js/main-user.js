
let url = new  URL(location.href);
console.log(url);
let id=JSON.parse(url.searchParams.get('id'));

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp=>resp.json())
    .then(users=>{

        let container = document.createElement("div");
        container.classList.add('container');

        let contain1 = document.createElement("div");
        contain1.classList.add('contain1');

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
                        contain1.appendChild(div);
                    }
                }
            }
        }
        iterate(users);
        container.appendChild(contain1);

        let button = document.createElement("button");
        button.innerText = 'posts'
        button.classList.add('button');
        container.appendChild(button)


        button.onclick = function (e){
            e.preventDefault();
            let title = document.createElement('div');
            title.classList.add('title');

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => posts.forEach(post => {

                    let contain = document.createElement("div");
                    contain.classList.add('contain');
                    contain.innerText = `title -- ${post.title}`;

                    let a = document.createElement("a");
                    a.href = `post-details.html?id=${post.id}`;
                    a.innerText ='Go';

                    let buttons = document.createElement("button");
                    buttons.classList.add('buttons');
                    buttons.appendChild(a);

                    title.appendChild(contain);
                    contain.appendChild(buttons);
                    container.appendChild(title);
                    button.disabled = true;
                }))}
        document.body.appendChild(container);
    })