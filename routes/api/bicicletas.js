var express= require('express');
var router = express.Router();
var bicicletaControler= require('../../controlers/api/bicicletaControllerAPI'); 

router.get('/', bicicletaControler.bicicleta_list);
router.post('/create', bicicletaControler.bicicleta_create);

module.exports  = router;