var express= require('express');
var router = express.Router();
var bicicletaControler= require('../controlers/bicicleta');

router.get('/',bicicletaControler.bicicleta_list);
router.get('/create',bicicletaControler.bicicleta_create_get);
router.post('/create',bicicletaControler.bicicleta_create_post);
router.get('/:id/update',bicicletaControler.bicicleta_update_get);
router.post('/:id/update',bicicletaControler.bicicleta_update_post);
router.post('/:id/delete',bicicletaControler.bicicleta_delete_post);

module.exports =router;