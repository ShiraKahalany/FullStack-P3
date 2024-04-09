// network.js
import { Server } from './server/server.js';

export function sendToNetwork(fxml, data) {

    console.log('sendToNetwork called');
    const method = fxml.method;
    const url = fxml.url;
    switch(method)
    {
        case 'GET':
            Server.GET(url, data);
            break;
        case 'POST':
            Server.POST(url, data);
            break;
        case 'PUT':
            Server.PUT(url, data);
            break;
        case 'DELETE':
            Server.DELETE(url, data);
            break;
        default:
            console.error('Invalid method');
    }
}

