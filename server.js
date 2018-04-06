const uuidv4 = require('uuid/v4');
const isNumber = require('is-number');
const _ = require('lodash');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router({});

// "Database" object
const db = {
  todos: [
    {
      id: uuidv4(),
      title: 'Coffee',
      completed: false,
      priority: 1,
    },
    {
      id: uuidv4(),
      title: 'Code',
      completed: false,
      priority: 2,
    }
  ]
};

// CREATE
router.post('/', function (req, res) {
  console.log('Create new Todo:', req.body);
  if (
    req.body.title &&
    isNumber(req.body.priority) &&
    typeof req.body.completed !== "undefined"
  ) {
    req.body.id = uuidv4();
    db.todos.push(req.body);
    res.json(req.body);
  } else {
    res.status(500);
    res.json(false);
  }
});

// READ
// -- LIST
router.get('/', function (req, res) {
  console.log('Get All Todo');
  res.json(db.todos);
});

// -- ONE
router.get('/:id', function (req, res) {
  console.log('Retrieve Todo with id:', req.params.id);
  let id = req.params.id;
  let todo = db.todos.filter((ele) => ele.id === id);
  if (todo.length) {
    res.json(todo);
  } else {
    res.status(500);
    res.json(false);
  }
});

// UPDATE
router.put('/:id', function (req, res) {
  console.log('Update Todo with id:', req.params.id);
  let id = req.params.id;
  let index = _.findIndex(db.todos, {id});
  if (index > -1) {
    db.todos[index] = req.body;
    res.json(req.body)
  } else {
    res.status(500);
    res.end();
  }
});

// DELETE
router.delete('/:id', function (req, res) {
  console.log('Delete Todo with id:', req.params.id);
  let id = req.params.id;
  let index = _.findIndex(db.todos, {id});
  if (index > -1) {
    db.todos.splice(index, 1);
    res.status(200);
  } else {
    res.status(500);
  }
  res.end();
});

// Plug-in
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

// Add Router
app.use('/api', router);

app.listen(3030, '0.0.0.0');
console.log('Server Started');
