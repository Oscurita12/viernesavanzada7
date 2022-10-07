import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"

export class ControladorHabitacion {

    constructor(){}

    async buscarHabitaciones(request,response){

        let objetoServicioHabitacion = new ServicioHabitacion()

        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitaciones()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null,
            })
        }
    }

    async buscarHabitacionPorId(request,response){
        let idhabitacion=request.params.idHabitacion //Recibo id de la peticion 
        let objetoServicioHabitacion = new ServicioHabitacion()
        //console.log("el id es: "+datosenviadosenurl)
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta"+idhabitacion,
                "datos":await objetoServicioHabitacion.buscarHabitacionPorId(idhabitacion),
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta"+error,
                "datos":null,
            })
        }
    }

    async registrarHabitacion(request,response){
        let datoshabitacion=request.body
        let objetoServicioHabitacion=new ServicioHabitacion()
        
        try{
            await objetoServicioHabitacion.agregarHabitacionEnBD(datoshabitacion)
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

    async editarHabitacion(request,response){
        let id = request.params.idHabitacion
        let datosEditar=request.body

        let objetoServicioHabitacion =new ServicioHabitacion()

        try{
            await objetoServicioHabitacion.editarHabitacion(id,datosEditar)
            response.status(200).json({
                "mensaje":"exito editando la habitacion"+id,
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