const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const Post = require('./models/post')

mongoose.connect('mongodb://testUser:testpass1@ds123645.mlab.com:23645/heroku_q4ctx2lj')
    .then(() => {
        console.log(`Connected to brootmother`)
    })
    .catch((err) => {
        throw err
    })

// app.use((req, res, next) => {
//     console.log('first middler')
//     next()
// })
// app.use((req, res, next) => {
//     res.send('Hello from express')
// })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, DELETE, OPTIONS`)
    next()
})

app.post('/api/post', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then((createdPost) => {
        res.status(201).json({
            message: 'Post created successfully',
            postId: createdPost._id
        });

    })

})

app.get('/api/posts', (req, res) => {
    Post.find()
        .then(posts => {
        console.log(posts)
        res.status(200).json({
            message: `Posts fetched succesfully!`,
            posts
        })
    });

})

app.delete('/api/post/:id', (req, res) => {
    Post.deleteOne({
        _id: req.params.id
    }).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted!"});
    })
})

module.exports = app;
