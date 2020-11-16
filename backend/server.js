const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require ('cors');
const PORT = 4000;

const rosterRoutes = express.Router();
let User = require('./user.model');

const mongoose=  require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/roster', {useNewUrlParse:true});
const db = mongoose.connection;

db.once('open', function(){
    console.log("MongoDB connection successful")
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

rosterRoutes.route('/').get(function(req,res){
    console.log("roster home")
    User.find(function(err, users){
        if (err){
            console.log(err)
        }else{
            res.json(users)
            console.log(users)
        }
    })
})

rosterRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    User.findById(id, function(err, user){
        res.json(user)
    });
});

rosterRoutes.route('/add').post(function(req, res){
    console.log(req.body.params);
    let user = new User(req.body.params);
    user.save().then(user => {
        console.log(user)
        res.status(200).json({'user': 'user added successfully'});
    }).catch(err => {
        res.status(400).send('adding new user failed')
    })
})

// Code to clear the DB
    // User.deleteMany( { }, ()=>{
    //     console.log("cleared");
    // } );
    // console.log("Done")





rosterRoutes.route('/update/:id').post(function(req, res){
    User.findById(req.params.id, function(err, user){
        if (!user)
            res.status(404).send('data not found');
        else    
            user.username = req.body.username;
            user.title = req.body.title;
            user.email = req.body.email;
            user.groups = req.body.groups;

            user.save().then(user => {
                res.json('User updated')
            })
            .catch(err =>{
                res.status(400).send("Couldn't update")
            })

    })
})

app.use('/roster', rosterRoutes);
app.listen(PORT, function(){
    console.log("server is running on port " + PORT)
});