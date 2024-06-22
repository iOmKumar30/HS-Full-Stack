const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());


app.get("/todos", (req, res) => {
  fs.readFile("todos.json", function (err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", function (err, data) {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send("Id not found!");
    } else {
      res.json(todos[todoIndex]);
    }
  });
});

app.post("/todos", function (req, res) {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
  };
  fs.readFile("todos.json", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put("/todos/:id", function (req, res) {
  fs.readFile("todos.json", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send("Id not found");
    } else {
      const updatedTodo = {
        id: todos[todoIndex].id,
        title: req.body.title || todos[todoIndex].title,
        description: req.body.description || todos[todoIndex].description,
        completed: req.body.completed || todos[todoIndex].completed,
      };
      todos[todoIndex] = updatedTodo;
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(updatedTodo);
      });
    }
  });
});

app.delete("/todos/:id", function (req, res) {
  fs.readFile("todos.json", (err, data) => {
    if (err) {
      res.status(500).send("Server Error");
      return;
    }

    let todos;
    try {
      todos = JSON.parse(data);
    } catch (parseError) {
      res.status(500).send("Error parsing JSON data");
      return;
    }

    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));

    if (todoIndex === -1) {
      res.status(404).send("Todo not found");
      return;
    }

    todos.splice(todoIndex, 1);

    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) {
        res.status(500).send("Error writing to file");
        return;
      }
      res.status(200).send("Todo deleted successfully");
    });
  });
});

// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
