const express = require('express');
const router = express.Router();
const posts = require('../models/posts');


router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado.");
});

router.delete("/delete/:id", (req, res) => {
    let delID = req.params.id;
    posts.deletePost(delID);
    res.send(`Post ${delID}, deletado.`);
});

router.delete("/deleteall", (req, res) => {
    posts.deleteAll();
    res.send("Todos posts deletedos")
})

module.exports = router;