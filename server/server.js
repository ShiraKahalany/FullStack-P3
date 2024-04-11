import * as familyCrud from './DB/familyCrud.js';
import * as itemCrud from './DB/itemToCleanCrud.js';
import { SendForServerToNetwork } from '../network.js'

export const Server = {
  GET: (fxml, data) => {
    if (fxml.url === 'families') { // Check if the URL is for retrieving families
      if(data === null){
      const families = familyCrud.getAllFamilies(); //families is json object
      // console.log('GET families called', families);
      fxml.response = families;
      fxml.responseType = 'json';

      if(fxml.response){
        fxml.status = 200;
        fxml.readyState = 4;
        fxml.dispatchEvent('readystatechange');
      }
      console.log('fxml.response :',fxml.response);
    }
    else if(data){
      fxml.response = familyCrud.getFamilyByID(data); //families is json object
      // console.log('GET families called', families);
      fxml.responseType = 'json';

      if(fxml.response){
        fxml.status = 200;
        fxml.readyState = 4;
        fxml.dispatchEvent('readystatechange');
      }
    }
  }
  
  else if (fxml.url === 'itemsToClean' ) { 
    if(data === null){
      fxml.response = itemCrud.getAllItemsToClean(); //data is json object
      fxml.responseType = 'json';
      if(fxml.response){
        fxml.status = 200;
        
      }
        fxml.readyState = 4;
        fxml.dispatchEvent('readystatechange');
    }
    else if(data){
      console.log("from get data",data)
      fxml.response = itemCrud.getItemsToCleanByID(data); //data is json object
      if(fxml.response){
        fxml.status = 200;
      }
        fxml.readyState = 4;
        fxml.dispatchEvent('readystatechange');
    }   
}
},

  POST: (fxml, data) => {
    console.log("fxmlinpost:",fxml)
    if (fxml.url === 'families') { // Check if the URL is for retrieving families
      familyCrud.addFamily(data); //data is json object
      fxml.responseType = 'json';

      fxml.status  = 200;
      fxml.readyState = 4;
      fxml.dispatchEvent('readystatechange');
    } 
    else if (fxml.url === 'itemsToClean') { // Check if the URL is for retrieving families
      itemCrud.addItemToClean(data); //data is json object
      fxml.status  = 200;
      fxml.readyState = 4;
      fxml.dispatchEvent('readystatechange');
    } 
  },

  PUT: (fxml, data) => { 
    if(fxml.url === 'families'){
      familyCrud.updateFamily(data);
      fxml.status  = 200;
      fxml.readyState = 4;
      fxml.dispatchEvent('readystatechange');
    }
    else if (fxml.url === 'itemsToClean') { // Check if the URL is for retrieving families
      itemCrud.updateItemToClean(data); //data is json object
      fxml.status  = 200;
      fxml.readyState = 4;
      fxml.dispatchEvent('readystatechange');
    } 
  },
  
  DELETE: (fxml, data) => {
    if(fxml.url === 'families'){
      familyCrud.deleteFamily(data);
      fxml.status  = 200;
      fxml.readyState = 4;
      fxml.dispatchEvent('readystatechange');
    }
    else if (fxml.url === 'itemsToClean') { // Check if the URL is for retrieving families
      itemCrud.deleteItemToClean(data); //data is json object
      fxml.status  = 200;
      fxml.readyState = 4;
      fxml.dispatchEvent('readystatechange');
    } 
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