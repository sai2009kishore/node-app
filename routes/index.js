var express = require('express');
var index = require('../public/javascripts/index');
var router = express.Router();
var { ModelHandler } = require('../public/javascripts/modelHandler');
const modelHandler = new ModelHandler();

/* GET home page. */
router.get('/start', function (req, res, next) {
  res.render('index', { title: 'Node Project 1' });
});

router.get('/', function (req, res) {
  res.send(index.start());
});

router.get('/:model', function (req, res) {
  responseHandler(res, modelHandler.listModel(req.params.model));
});

router.post('/:model', function (req, res) {
  responseHandler(res, modelHandler.addModel(req.params.model, req.body));
});

function responseHandler(response, data) {
  response.status(data.getStatus()).send(data.getData());
}

module.exports = router;
