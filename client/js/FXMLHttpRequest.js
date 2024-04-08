class FXMLHttpRequest {
    constructor() {
        this.readyState = 0;
        this.status = 0;
        this.statusText = '';
        this.response = null;
        this.responseText = '';
        this.responseType = '';
        this.responseURL = '';
        this.timeout = 0;
        this.withCredentials = false;
        this.upload = {};
        this._listeners = {
            readystatechange: [],
            load: [],
            error: [],
            timeout: [],
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
        // Implement header setting logic here
    }

    send(data = null) {
        if (this.readyState !== 1) {
            throw new Error('Invalid state');
        }
        // Implement send logic here
        this.dispatchEvent('load');
    }

    abort() {
        // Implement abort logic here
        this.readyState = 0;
        this.dispatchEvent('abort');
    }

    getAllResponseHeaders() {
        // Implement logic to return all response headers
    }

    getResponseHeader(header) {
        // Implement logic to return a specific response header
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
}

// Example usage
const request = new FXMLHttpRequest();
request.addEventListener('load', () => {
    console.log('Request completed:', request.responseText);
});
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
request.send();
