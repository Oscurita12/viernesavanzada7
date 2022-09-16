import express from 'express' //Se importa express

import {rutasPersonalizadas} from '../Routes/rutas.js'

export class ServidorAPI {

    constructor(){
        this.app = express() //Atributo 
        this.atenderPeticiones()

    }

    //Métodos de la clase ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Exito encendiendo el servidor: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/', rutasPersonalizadas)
    }

    conectarConBD(){}

}