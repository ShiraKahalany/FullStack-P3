// network.js
import { Server } from './server/server.js';

export function sendToNetwork(fxml, data) { //data=null כשקיבל


    console.log('sendToNetwork called: {fxml: ' + JSON.stringify(fxml) + ', data: ' + JSON.stringify(data) + '}');
    const method = fxml.method;
    const url = fxml.url;
    console.log(url)
    switch(method)
    {
        case 'GET':
            Server.GET(fxml, data);
            break;
        case 'POST':
            Server.POST(fxml, data);
            break;
        case 'PUT':
            Server.PUT(fxml, data);
            break;
        case 'DELETE':
            Server.DELETE(fxml, data);
            break;
        default:
            console.error('Invalid method');
    }
    return fxml;
}

export function SendForServerToNetwork(fxml, sucsess)
{
    console.log('SendForServerForNetwork called');
    if(sucsess)
    {
        fxml.status = 200;
        
    }
    else
    {
        fxml.status = 404;
    }
    fxml.readyState = 4;
    fxml.dispatchEvent('readystatechange');

}

