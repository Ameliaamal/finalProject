const express = require('express');
const path= require('path');
const bodyParser= require('body-parser');
const {engine}= require('express-handlebars');
const { getConnection }= require('./db/mongoose.js');
const userService= require('./users_modules/service.js');

const app= express();
const port = 3000;

//app.use(express.static(path.join(__dirname,'/client')))
app.use(express.static(path.join(__dirname,'./css/')))

app.engine('handlebars', engine)
app.set('view engine', 'handlebars');
app.set('views', '/views/layouts');


app.get('/', (req,res) =>{
    console.log('il a demande lapage index');
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.get('/signupin', (req,res) =>{
    console.log('il a demande la page signup');
    res.sendFile(path.join(__dirname,'/signupin.html'));
})

app.post('/signupin', async (req, res) => {
    try {
        await userService.storeUser(req.body)
    } catch(err) {
        res.status(err.code).json({
            error: err.msg
        })
        return
    }
    // res.status, sets the status of the response
    // json will send json data as the response body
    res.status(200).json({
        message: "user created sucessfully"
    })
})

app.get('/postajob', (req,res) =>{
    console.log('il a demande lapage poste a job');
    res.sendFile(path.join(__dirname,'/postajob.html'));
})

app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(port, async () => {
console.log('le serveur ecoute le port 3000');
await getConnection();
console.log('super tu tes connectee a ta bd');
})

module.exports=app;
//je vais declarer o\ici mongoose voila
