const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


/* config  */
const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 8888;
/* end config */

//define connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo-list'
});

//connect
connection.connect(function (e, d) {
    if (e) console.log(e);
    console.log('con success');
});


//get list of household members
app.get('/householdmembers', function (req, res) {
    let sql = "SELECT * FROM household_members"
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    })
});

// let householdMemberName = "SELECT `name` FROM household_members where `id`=" + result.id;


//get list of chores
app.get('/tasklist', function (req, res) {
let sql= "SELECT `task_list`.id, `task_list`.`name`, `task_list`.`date`, household_members.name as `id_household_member` FROM `task_list` inner join household_members on household_members.id = `task_list`.`id_household_member`"
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

//insert task into task table
app.post('/addtask', function (req, res) {
    let post = req.body;

    console.log(post)
    let sql ="INSERT INTO task_list SET ?"
    connection.query(sql, post, function (err, result) {
        if (err) {
            throw err
        };
        
        res.json(result);
        
    })
});

app.listen(PORT, () => {
    console.log('listening on ',PORT);
});