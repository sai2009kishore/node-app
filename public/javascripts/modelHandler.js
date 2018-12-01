var db = require('../resources/db.json');
var { Response } = require('./response');
let { emitter } = require('./emitter');

class ModelHandler {
    listModel(model) {
        return db[model] ? new Response(200, db[model]) : new Response(404, 'No model found');
    }

    addModel(model, obj) {
        if (obj.id) {
            return new Response(400, 'ID is not expected');
        }
        if (!(obj.name && obj.country)) {
            return new Response(400, 'Name and country are expected');
        }
        let data = JSON.parse(JSON.stringify(db));
        if (!data[model]) {
            data[model] = [];
        }
        obj.id = this._getLatestId(data[model]);
        data[model].push(obj);
        emitter.emit('flushData', data);
        return new Response(201, data[model]);
    }

    _getLatestId(data) {
        let id = -1;
        data.forEach(function (data) {
            if (data.id > id) {
                id = data.id;
            }
        });
        return id + 1;
    }
}

module.exports = { ModelHandler };