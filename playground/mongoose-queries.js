const  {mongoose} = require('../server/db/mongoose');
const  {Todo} = require('../server/models/todo');

let id = '590b082bf0c0e66cdfbb153ff5';

Todo.findById(id).then((todo) => {

    if (!todo) {
       return console.log('Found nothing')
    }
    console.log(todo);
}).catch((e) => console.log(e));