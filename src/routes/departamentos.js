//configuracion de la rutas que se podran usar en nuestra aplicacion y los metodos HTTP que cada metodo puede manejar
import express from 'express'

import DepartamentosController from '../controllers/departamentos'

const router = express.Router()

router.route('/')
  .get(DepartamentosController.departamentos)
  .post(DepartamentosController.addDepartamento)

router.route('/:id')
  .get(DepartamentosController.departamentoById)
  .put(DepartamentosController.editDepartamentoById)
  .delete(DepartamentosController.deleteDepartamento)

router.route('/:codigo')
  .get(DepartamentosController.departamentoByCodigo)


export default router
