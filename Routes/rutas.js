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

rutasPersonalizadas.get('/hotelesflork/')

rutasPersonalizadas.get('/hotelesflork/')

rutasPersonalizadas.post('/hotelesflork/')

rutasPersonalizadas.put('/hotelesflork/')

rutasPersonalizadas.delete('/hotelesflork/')
