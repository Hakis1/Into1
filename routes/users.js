const { request } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Terve vaan");
});

router.use(function(request, response, next)
{
  console.log("Olen välivehje 1!");
  next();
});

router.get('/Toka', function(request, response)
{
  response.send("Olempa toka hyvinkin!");
  console.log("Tokapa tietenkin!");
});

router.use(function(request, response, next)
{
  console.log("Olen välivehje 2!");
  next();
});

router.get('/Kolmas/:nimi', function(request, response)
{
  response.send("Olempa vaan "+request.params.nimi);
  console.log(request.params.nimi);
});

router.use(function(request, response, next)
{
  console.log("Olen välivehje 3!");
  next();
});

router.get('/Neljas/:enimi/:snimi', function(request, response)
{
  response.send("Olempa vaan "+request.params.enimi+" "+request.params.snimi);
  console.log(request.params.enimi+" "+request.params.snimi);
});

router.post('/', function(request, response)
{
  response.send(request.body);
});

module.exports = router;
