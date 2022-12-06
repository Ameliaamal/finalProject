const express = require('express');
const path= require('path');
const bodyParser= require('body-parser');
const {engine}= require('express-handlebars');
const { getConnection }= require('./db/mongoose.js');
const userService= require('./users_modules/service');
const {userModel}= require('./users_modules/model.js');

const app= express();
const port = 3000;

app.use(express.static(path.join(__dirname,'/client/public')))
app.use(bodyParser.json())

app.engine('handlebars', engine)
app.set('view engine', 'handlebars');
app.set('views', '/views/layouts');


app.get('/', (req,res) =>{
    console.log('il a demande lapage index');
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/signupin', (req,res) =>{
    console.log('il a demande la page signup');
    res.sendFile(path.join(__dirname,'signupin.html'));
})


app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/signup.html'))
})



app.post('/signupin', async (req, res) => {
    try {
        console.log('il veut enregistrer');
        await userService.storeUser(req.body)
    } catch(err) {
        console.log('il veut pas enregistrer user');
        console.log(err)
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

app.get('/user/:email', (req, res) => {
    const user = userService.getUser(req.params.email)
    res.render('profile', {
        layout: 'profile',
        name: user.name, 
        email: user.email,
        course: user.course,
        address: user.address,
        dob: user.dob,
        bio: user.bio,
    })
})



app.get('/postajob', (req,res) =>{
    console.log('il a demande lapage poste a job');
    res.sendFile(path.join(__dirname,'./client/postajob.html'));
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