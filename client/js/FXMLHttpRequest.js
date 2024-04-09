import { sendToNetwork } from '../../network.js';

//object are used to interact with servers


export class FXMLHttpRequest {

    //The constructor initializes an FXMLHttpRequest. It must be called before any other method calls.
    constructor() {

        //Returns a number representing the state of the request.
        this.readyState = 0;

        //Returns the HTTP response status code of the request.
        this.status = 0;
        //Returns a string containing the response string returned by the HTTP server. 
        //Unlike XMLHttpRequest.status, this includes the entire text of the response message ("OK", for example).
        this.statusText = '';

        //Returns an ArrayBuffer, a Blob, a Document, a JavaScript object, or a string, 
        //depending on the value of XMLHttpRequest.responseType, that contains the response entity body.
        this.response = null;

        //Returns a string that contains the response to the request as text, 
        //or null if the request was unsuccessful or has not yet been sent.
        this.responseText = '';

        //Specifies the type of the response.
        this.responseType = '';

        //Returns the serialized URL of the response or the empty string if the URL is null.
        this.responseURL = '';

        //The time in milliseconds a request can take before automatically being terminated.
        this.timeout = 0;

        //Returns true if cross-site Access-Control requests 
        //should be made using credentials such as cookies or authorization headers; otherwise false.
        this.withCredentials = false;

        //A XMLHttpRequestUpload representing the upload process.
        this.upload = {};


        this._listeners = {

            //Fired whenever the readyState property changes.
            readystatechange: [],

            //Fired when an XMLHttpRequest transaction completes successfully. 
            load: [],

            //Fired when a request has completed, 
            //whether successfully (after load) or unsuccessfully (after abort or error).
            loadend: [],

            //Fired when a request has started to load data.
            loadstart: [],

            //Fired periodically when a request receives more data.
            progress: [],

            //Fired when the request encountered an error.
            error: [],

            //Fired when progress is terminated due to preset time expiring.
            timeout: [],

            //Fired when a request has been aborted, for example because the program called FXMLHttpRequest.abort().
            abort: []
        };
    }

    open(method, url, async = true, user = null, password = null) {
        if (this.readyState !== 0) {
            throw new Error('Invalid state');
        }
        this.method = method;
        this.url = url;
        this.async = async;
        this.username = user;
        this.password = password;
        this.readyState = 1;
        this.dispatchEvent('readystatechange');
    }

    setRequestHeader(header, value) {
        if (this.readyState !== 1) {
            throw new Error('Invalid state');
        }
        //header setting logic here
    }

    send(data = null) {
        if (this.readyState !== 1) {
            throw new Error('Invalid state');
        }

        sendToNetwork(this, data);

        this.InnerSetTimeOut();
        this.dispatchEvent('load');
        this.readyState = 2;
    }

    abort() {
        //abort logic here
        this.readyState = 0;
        this.dispatchEvent('abort');
    }

    getAllResponseHeaders() {
        // here the logic to return all response headers
    }

    getResponseHeader(header) {
        // here the logic to return a specific response header
    }

    addEventListener(type, listener) {
        if (!(type in this._listeners)) {
            throw new Error('Invalid event type');
        }
        this._listeners[type].push(listener);
    }

    removeEventListener(type, listener) {
        if (!(type in this._listeners)) {
            throw new Error('Invalid event type');
        }
        const index = this._listeners[type].indexOf(listener);
        if (index !== -1) {
            this._listeners[type].splice(index, 1);
        }
    }

    dispatchEvent(type) {
        if (!(type in this._listeners)) {
            throw new Error('Invalid event type');
        }
        this._listeners[type].forEach(listener => listener());
    }

    InnerSetTimeOut() {
        setTimeout(() => {
            this.dispatchEvent('timeout');
        }, this.timeout);
    }
}

// // Example usage
// const request = new FXMLHttpRequest();
// request.addEventListener('load', () => {
//     console.log('Request completed:', request.responseText);
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
// request.send();
