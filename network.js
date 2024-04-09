// network.js

export function sendToNetwork(fxml, data) {
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
    }
}

