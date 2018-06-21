var rp = require('request-promise');

var apiKey = 'YOUR_API_KEY';

// See if Medicaid can cover abortion in Alaska
rp({
    uri: 'http://api.abortionpolicyapi.com/v1/insurance_coverage/states/AK',
    method: 'GET',
    headers: { 'token': apiKey },
    json: true
}).then(function success(response) {
    // Make sure values were returned for Alaska
    if (response && response.Alaska) {
        // Get all fields that contain 'medicaid_'
        var keys = Object.keys(response.Alaska).filter(key => {
            return key.indexOf('medicaid') > -1 && response.Alaska[key] === true;
        });
        
        // Looking at field reference, you can see that the scenarios in which medicaid
        // covers abortion are described after the first two descriptors.
        var message = "In Alaska, Medicaid covers abortion when it's: ";
        message += keys.map(key => { return key.split('_').slice(2).join(' ')})
            .join(', ');
        message += "\n(The API data are not currently optimized for grammar.)"
        console.log(message);
    }
}).catch(function error(response) {
    console.log(response.error);
});