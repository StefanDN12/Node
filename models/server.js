

const express = require('express')
const cors = require('cors')
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        
        //Middlewares
        this.middlewares()

        //Rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'))

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json())


    }
    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes')) 
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El servidor esta corriendo en el puerto ${this.port}`)
        });
    }
}
module.exports = Server