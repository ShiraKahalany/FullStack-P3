import { getAllFamilies } from './DB/familyCrud';

export const Server = {
  GET: (url, data) => {
    if (url === 'families') { // Check if the URL is for retrieving families
        const families = getAllFamilies();
        console.log('GET families called', families);
        // Send the retrieved families back to the client
        // Assuming here that you're using Express.js, you can send the families as JSON
        res.json(families);
    }
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