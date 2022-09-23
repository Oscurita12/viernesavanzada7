import express from 'express' //Se importa express

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion() //Usando el controlador de las habitaciones

import { ControladorReservas } from '../Controllers/ControladorReservas.js'
let controladorReservas=new ControladorReservas() ////Usando el controlador de las reservas

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesflork/habitaciones',controladorHabitacion.buscarHabitaciones)

rutasPersonalizadas.get('/hotelesflork/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)

rutasPersonalizadas.post('/hotelesflork/habitacion',controladorHabitacion.registrarHabitacion)

rutasPersonalizadas.put('/hotelesflork/habitacion',controladorHabitacion.editarHabitacion)

rutasPersonalizadas.get('/hotelesflork/reservas',controladorReservas.buscarReservas)

rutasPersonalizadas.get('/hotelesflork/reserva/:id',controladorReservas.buscarReservaPorId)

rutasPersonalizadas.post('/hotelesflork/reserva',controladorReservas.registrarReserva)

rutasPersonalizadas.put('/hotelesflork/reserva',controladorReservas.editarReserva)

rutasPersonalizadas.delete('/hotelesflork/reservadelete',controladorReservas.eliminarReserva)
