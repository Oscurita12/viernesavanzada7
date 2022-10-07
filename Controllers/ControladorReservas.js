import { ServicioReserva } from "../Services/ServicioReserva.js"

export class ControladorReservas {

    constructor(){}

    async buscarReservas(request,response){

        let objetoServicioReserva = new ServicioReserva()

        try{
            response.status(200).json({
                "mensaje":"exito en la reserva",
                "datos":await objetoServicioReserva.buscarReservas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva"+error,
                "datos":null,
            })
        }
    }

    async buscarReservaPorId(request,response){
        let idreserva=request.params.idreserva
        let objetoServicioReserva = new ServicioReserva()
        //console.log("el id de la reserva es: "+idreserva)
        try{
            response.status(200).json({
                "mensaje":"exito en la reserva "+idreserva,
                "datos":await objetoServicioReserva.buscarReservaPorId(idreserva),
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva"+error,
                "datos":null,
            })
        }
    }

    async registrarReserva(request,response){
        let datosreserva=request.body
        let objetoServicioReserva= new ServicioReserva()

        try{
            await objetoServicioReserva.agregarReservaEnBD(datosreserva)
            response.status(200).json({
                "mensaje":"exito registrando la reserva",
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva"+error,
                "datos":null,
            })
        }
    }

    async editarReserva(request,response){
        let idr = request.params.idreserva
        let datosReserva=request.body
        let objetoServicioReserva = new ServicioReserva()
        try{
            await objetoServicioReserva.editarReserva(idr,datosReserva)
            response.status(200).json({
                "mensaje":"exito editando la reserva"+idr,
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva"+error,
                "datos":null,
            })
        }
    }

    eliminarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"se eliminó correctamente la reserva",
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva"+error,
                "datos":null,
            })
        }
    }
}