
const {response} = require('express')


 const usuarioGet = (req, res) => {

    const qr = req.query
    
    res.json({
        ok : true,
        msg : 'get Api - controller',
        query : qr
    })
}
const usuarioPost = (req, res) =>{

    const body = req.body


    //Se puede desestructurar el objeto para obtener lo que se quiera y protegerse mas

    //const {nombre, apellido} = req.body

    res.json({
        ok: true,
        msg : 'post Api - controller',
        body : body
    })
}

const usuarioDelete = (req, res) =>{
    res.json({
        ok: true,
        msg: 'Delete Api - controller'
    })
}
const usuarioPut = (req, res) =>{
    res.json({
        ok: true,
        msg: 'Delete put - controller'
    })
}

/*
 const usuarioPut = (req, res) => {
    const id = parseInt(req.params.id);
    res.json({
        ok : true,
        msg : 'get Api - controller',
        id: id
    })
}
*/


module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioDelete,
    usuarioPut
}