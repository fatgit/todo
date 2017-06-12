const  {mongoose} = require('../server/db/mongoose');
const  {Todo} = require('../server/models/todo');

Todo.findByIdAndRemove('59119f8c6fa7903e2b91b0ad').then((res) => {
    if (!res) {
        console.log('fffffffff');
    }
});