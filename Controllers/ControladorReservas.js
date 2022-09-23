export class ControladorReservas {

    constructor(){}

    buscarReservas(request,response){
        try{
            response.status(200).json({
                "mensaje":"exito en la reserva",
                "datos":"Aquí va los datos de la reserva",
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva"+error,
                "datos":null,
            })
        }
    }

    buscarReservaPorId(request,response){
        try{
            response.status(200).json({
                "mensaje":"exito en la reserva",
                "datos":"Aquí va los datos de la reserva por id",
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva"+error,
                "datos":null,
            })
        }
    }

    registrarReserva(request,response){
        try{
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

    editarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"exito editando la reserva",
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