
let url = new  URL(location.href);
let id=JSON.parse(url.searchParams.get('id'));

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(posts =>{

        let header = document.createElement("div");
        header.classList.add('header');

        for (const postsKey in posts) {

            let add = document.createElement("div");
            add.classList.add('add');
            add.innerText = `${postsKey} -- ${posts[postsKey]}`;
            header.appendChild(add);

        }

        let superContainer = document.createElement("div");
        superContainer.classList.add('superContainer');


        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(comments => comments.forEach(comment => {

                let container = document.createElement("div");
                container.classList.add('container');

                for (const commentKey in comment) {

                    let contain = document.createElement("div");
                    contain.classList.add('contain');
                    contain.innerText = `${commentKey} -- ${comment[commentKey]}`;
                    container.appendChild(contain);

                }
                superContainer.appendChild(container);

            }))
        header.appendChild(superContainer);
        document.body.appendChild(header);
    });