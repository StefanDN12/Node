const {Router} = require('express');
const { usuarioGet } = require('../controllers/usuarios.controller');
const { usuarioPost } = require('../controllers/usuarios.controller');
const { usuarioDelete } = require('../controllers/usuarios.controller');
const { usuarioPut } = require('../controllers/usuarios.controller');
const router = Router()


    //get
router.get('/', usuarioGet)
    /*res.status(403).json({
        ok: true,
        msg: 'get API'
    })*/
  //post
  router.post('/',usuarioPost); 
    /*res.status(403).json({
        ok: true,
        msg: 'get API'
    })*/
  //Delete
  router.delete('/', usuarioDelete)
    /*res.status(403).json({
        ok: true,
        msg: 'get API'
    })*/
  //put
  router.put('/:id', usuarioPut);


  module.exports = router