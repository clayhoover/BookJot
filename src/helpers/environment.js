let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:9001';
        break;
    case 'cmh-bookjot-c.herokuapp.com':
        APIURL = 'https://cmh-bookjot-c.herokuapp.com'
}

export default APIURL;