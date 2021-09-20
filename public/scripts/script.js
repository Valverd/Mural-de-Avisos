
document.addEventListener("DOMContentLoaded", () => {
    uptadePosts();
});

function cleanInput() {
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
}

function uptadePosts() {
    fetch("http://192.168.0.170:3000/api/all").then(res => {
        return res.json();
    }).then(json => {
        let postElements = '';

        let posts = JSON.parse(json);

        posts.forEach(post => {

            let postElement = `
            <div id="${post.id}" class="card mb-4">
                <div class="card-header d-flex justify-content-between bg-info text-light">
                    <h5 class="card-title">${post.title}</h5>
                    <button onclick="del(this)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="card-body bg-secondary text-light">
                    <p class="card-title">${post.description}</p>
                </div>
            </div>
            `

            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;
    });
};


function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    };

    if (title || description != '') {
        //passei o options para dizer que esse é um metodo POST e não GET
        fetch("http://192.168.0.170:3000/api/new", options);
        uptadePosts();
        cleanInput();
    };
};

function del(close) {
    //aqui pego o id da div que esta acima do button close, 2 vezes pq passa por 2 divs.
    let id_externo = close.parentElement.parentElement.id;

    const options = {
        method: "DELETE"
    };

    fetch(`http://192.168.0.170:3000/api/delete/${id_externo}`, options)

    uptadePosts();

};

function delAll(){
    const options = {
        method: "DELETE"
    };

    fetch("http://192.168.0.170:3000/api/deleteall", options);
    uptadePosts();
}