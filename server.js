var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

// "Database" object
var db = {
  todos: [
    {
      title: 'Coffee',
      completed: false
    },
    {
      title: 'Code',
      completed: false
    }
  ]
};

// CREATE
router.post('/', function (req, res) {
  console.log(req.body);
  if (req.body.title && typeof req.body.completed !== "undefined") {
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
  res.json(db.todos);
});

// -- ONE
router.get('/:id', function (req, res) {
  var id = req.params.id;
  var todo = db.todos[id];
  if (todo) {
    res.json(todo);
  } else {
    res.status(500);
    res.json(false);
  }
});

// UPDATE
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var todo = db.todos[id];
  if (todo) {
    db.todos[id] = req.body;
    res.json(req.body)
  } else {
    res.status(500);
    res.end();
  }
});

// DELETE
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  var todo = db.todos[id];
  if (todo) {
    db.todos.splice(id, 1);
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
