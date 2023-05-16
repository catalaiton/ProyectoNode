var express= require('express');
var router = express.Router();
var bicicletaControler= require('../../controlers/api/bicicletaControllerAPI'); 

router.get('/', bicicletaControler.bicicleta_list);

module.exports = router;