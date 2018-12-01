let config = require('../../config.json');

function start() {
    return { status: 'up', version: config.version};
}

exports.start = start;