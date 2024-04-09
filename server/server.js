export const Server = {
  GET: (url, data) => {
    //url=family/itemToClean/Error
    //data=if you want specific data
    console.log('GET called');
  },
  POST: (url, data) => {
    console.log('POST called');
  },
  PUT: (url, data) => {
    console.log('PUT called');
  },
  DELETE: (url, data) => {
    console.log('DELETE called');
  }
};





// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// let tasks = [
//   { id: 1, title: 'Task 1', completed: false },
//   { id: 2, title: 'Task 2', completed: true },
// ];

// app.get('/api/tasks', (req, res) => {
//   res.json(tasks);
// });

// app.post('/api/tasks', (req, res) => {
//   const newTask = req.body;
//   tasks.push(newTask);
//   res.status(201).json(newTask);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });