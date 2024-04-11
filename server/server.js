import * as familyCrud from './DB/familyCrud.js';
import * as itemCrud from './DB/itemToCleanCrud.js';
import { SendForServerToNetwork } from '../network.js'

export const Server = {
  GET: (fxml, data) => {
    if (fxml.url === 'families') { // Check if the URL is for retrieving families
      const families = familyCrud.getAllFamilies(); //families is json object
      // console.log('GET families called', families);
      fxml.response = families;
      fxml.responseType = 'json';


      if(fxml.response){
        SendForServerToNetwork(fxml,true);        
      }
      else{
        SendForServerToNetwork(fxml,false);
    }
      console.log('fxml.response :',fxml.response);
  }
  
  else if (fxml.url === 'itemsToClean' ) { 
    if(data === null){
      fxml.response = itemCrud.getAllItemsToClean(); //data is json object
      fxml.responseType = 'json';
      if(fxml.response){
        SendForServerToNetwork(fxml,true);        
      }
      else{
        SendForServerToNetwork(fxml,false);
    }
    }
    else if(data){
      console.log("from get data",data)
      fxml.response = itemCrud.getItemsToCleanByID(data); //data is json object
      if(fxml.response){
        SendForServerToNetwork(fxml,true);        
      }
      else{
        SendForServerToNetwork(fxml,false);
    }
}
}
},

  POST: (fxml, data) => {
    console.log("fxmlinpost:",fxml)
    if (fxml.url === 'families') { // Check if the URL is for retrieving families
      familyCrud.addFamily(data); //data is json object
      fxml.responseType = 'json';

      SendForServerToNetwork(fxml,true);        
    } 
    else if (fxml.url === 'itemsToClean') { // Check if the URL is for retrieving families
      itemCrud.addItemToClean(data); //data is json object
        SendForServerToNetwork(fxml,true);        
    } 
  },

  PUT: (fxml, data) => { 
    if(fxml.url === 'families'){
      familyCrud.updateFamily(data);
      SendForServerToNetwork(fxml,true);        

    }
  },
  
  DELETE: (fxml, data) => {
    if(fxml.url === 'families'){
      familyCrud.deleteFamily(data);
      SendForServerToNetwork(fxml,true);        

    }
  }
};
