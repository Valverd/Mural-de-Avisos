module.exports = {

    
    posts: [

        {
            id: 12345,
            title: "Título teste",
            description: "Descrição teste."
        }
    ],


    getAll() {
        return this.posts;
    },


    newPost(title, description) {
        this.posts.push({ id: gerarID(), title, description });
    },


    deletePost(id) {
        this.posts.forEach((doc, i) => {
            if(doc.id == id){
                this.posts.splice(i, 1);
                console.log(this.posts);
            }
        })
    },

    deleteAll() {
        this.posts = [];
    }


}

function gerarID() {
    return Math.random().toString(36).substr(2, 9);
};