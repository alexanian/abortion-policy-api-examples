var rp = require('request-promise');

var apiKey = 'YOUR_API_KEY';

// Count the number of states that require parental consent for minors
rp({
    uri: 'http://api.abortionpolicyapi.com/v1/minors/states',
    method: 'GET',
    headers: { 'token': apiKey },
    json: true
}).then(function success(response) {
    if (response) {
        var states = Object.keys(response);
        var count = states.reduce((count, state) => {
            return count + (response[state].parental_consent_required == true); 
        }, 0);

        console.log(`Number of states that require parental consent: ${count}`);
    }
}).catch(function error(response) {
    console.log(response.error);
});