let posts =  JSON.parse(localStorage.getItem('posts'));

posts.forEach(post=>{

    let header = document.createElement('div')
    header.classList.add('header')

    for (const headerKey in post) {
        let div = document.createElement("div");
        div.classList.add('add');
        div.innerText = `${headerKey} --- ${post[headerKey]}`;
        header.appendChild(div);

    }
    let superContainer = document.createElement("div");
    superContainer.classList.add('superContainer');

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => comments.forEach(comment => {

                if (post.id === comment.postId) {

                    let container = document.createElement("div");
                    container.classList.add('container');

                    for (const hearKey in comment) {

                        let contain = document.createElement("div");
                        contain.classList.add('contain');
                        contain.innerText = `${hearKey} --- ${comment[hearKey]}`;
                        container.append(contain)

                    }
                    superContainer.appendChild(container);
                }
            })
        )
    header.appendChild(superContainer);
    document.body.appendChild(header);
})