let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    console.log(req.body);
});

app.listen(3000, () => {
    console.log('Serever is running on 3000 port')

});