export class ControladorHabitacion {

    constructor(){}

    buscarHabitaciones(request,response){
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":"Aquí va los datos de habitaciones",
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null,
            })
        }
    }

    buscarHabitacionPorId(request,response){
        let idhabitacion=request.params.idHabitacion //Recibo id de la peticion 
        //console.log("el id es: "+datosenviadosenurl)
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta"+idhabitacion,
                "datos":"Aquí va el dato de una habitación por id ",
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null,
            })
        }
    }

    registrarHabitacion(request,response){
        let datoshabitacion=request.body
        
        try{
            response.status(200).json({
                "mensaje":"exito registrando habitacion",
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null,
            })
        }
    }

    editarHabitacion(request,response){
        let id = request.params.idHabitacion
        let datosEditar=request.body
        console.log(id,datosEditar)
        try{
            response.status(200).json({
                "mensaje":"exito editando la habitacion"+id,
                "datos":datosEditar,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null,
            })
        }
    }

}