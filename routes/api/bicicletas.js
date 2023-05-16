var express= require('express');
var router = express.Router();
var bicicletaControler= require('../../controlers/api/bicicletaControllerAPI'); 

router.get('/', bicicletaControler.bicicleta_list);
router.post('/create', bicicletaControler.bicicleta_create);
router.delete('/delete', bicicletaControler.bicicleta_delete);

module.exports  = router;