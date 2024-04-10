import * as familyCrud from './DB/familyCrud.js';

export const Server = {
  GET: (fxml, data) => {
    if (fxml.url === 'families') { // Check if the URL is for retrieving families
      const families = familyCrud.getAllFamilies(); //families is json object
      // console.log('GET families called', families);
      fxml.response = families;
      if(fxml.response){
        fxml.readyState = 4;
        fxml.status = 200;
      }
      console.log('fxml.response :',fxml.response);
      
      // Send the retrieved families back to the client
      // Assuming here that you're using Express.js, you can send the families as JSON
      // res.json(families); // Uncomment this line if you're using Express.js
  }  
},
  POST: (fxml, data) => {
    if (fxml.url === 'families') { // Check if the URL is for retrieving families
      familyCrud.addFamily(data); //data is json object
      fxml.status  = 200;
  } 
  },
  PUT: (fxml, data) => { 
    familyCrud.updateFamily(data);
    fxml.status  = 200;
  },
  DELETE: (fxml, data) => {
    familyCrud.deleteFamily(data);
    fxml.status  = 200;
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