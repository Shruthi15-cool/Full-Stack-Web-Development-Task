const { response, request } = require('express');
var express = require('express');
const res = require('express/lib/response');
var app = express();

const mongoose = require('mongoose')
const url = 'mongodb://localhost/users'

async function connectMongoServer(){
    try{
        await mongoose.connect('mongodb://localhost/demo')
        console.log(err.message);
    
    }catch(err){
        console.log(err.message);
    }
}

var bodyParser = require('body-parser');
const req = require('express/lib/request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={userResponse:""};
    }

    callUSER(){
        fetch('http://localhost:9000/users')
        .then(res => res.text())
        .then(res => this.setState({userResponse}));
    }

componentWillMount() {
    this.callUSER()
}
}
connectMongoServer()
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User', userSchema)

async function createUser(){
    const user = new User ({
        name: 'Virat',
        user_id: 'vk18',
    })
    const result = await user.save()
        console.log({result});
    }

    createUser()

    async function getUser(){
        const result = await User

        .where({name: /newuser$/i})
        .and({user_id:{$in:['firstuser']}})
        .select('name user_id')
        console.log({result});
    }


    getUser()

    async function updateUser(id){
        const result = await
        User.findByIdAndUpdate(id,{
            $set: {
                name:'Rohit',
                user_id: 'ro45',
            }

        }, {new: true})
        console.log({result});

    }

    
    async function deleteUser(id) {
        const result = await
        User.deleteOne({
            _id:id
        })

        console.log(result);
    }

app.use(express.json())

app.listen(5000, function() {
    console.log("My App is running on port 5000!!");
});