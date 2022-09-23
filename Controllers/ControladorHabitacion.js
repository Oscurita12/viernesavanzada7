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
        
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
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
        
        try{
            response.status(200).json({
                "mensaje":"exito editando la habitacion",
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null,
            })
        }
    }

}