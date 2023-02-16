const request = require('request');
const MEDIASTACK_API_KEY = require('../core/config/config').mediaStackApiKey;
const INFO_API_URL = `http://api.mediastack.com/v1/news?access_key=${MEDIASTACK_API_KEY}`;

module.exports = {
    getLastInfos: (nbInfo, callback) => {
        request(`${INFO_API_URL}&limit=${nbInfo}`, { json: true }, (err, res, body) => {
            if (err) {
                return callback(err);
            }
            return callback(null, body.data);
        });
    }
}

