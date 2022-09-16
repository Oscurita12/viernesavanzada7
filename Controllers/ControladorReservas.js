export class ControladorReservas {

    constructor(){}

    buscarReservas(request,response){
        response.send("Estoy buscando reservas desde el controlador")
    }

    buscarReservaPorId(request,response){
        response.send("Estoy buscanso una reserva por id desde el controlador")
    }

    registrarReserva(request,response){
        response.send("Estoy agregando una reserva desde el controlador")
    }

    editarReserva(request,response){
        response.send("Estoy editando una reserva desde el controlador")
    }

    eliminarReserva(request,response){
        response.send("Estoy eliminando una reserva desde el controlador")
    }
}