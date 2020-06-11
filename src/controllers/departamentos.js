//contiene todos lo metodos que vamos a utilizar a la hora de usar GET/PUT/POST/DELETE
import { Departamento } from '../models'

class DepartamentosController {
  //devuelve todos los departamentos
  async departamentos(req, res, next) {
    const data = await Departamento().getAll()

    res
      .status(200)
      .json(data)
  }

  //devuelve un departamento en base a su ID
  async departamentoById(req, res, next) {
    const data = await Departamento().getById(req.params.id)

    res
      .status(200)
      .json(data)
  }

  //devuelve un departamento en base a su codigo(en pruebas)
  async departamentoByCodigo(req, res, next) {
    const data = await Departamento().getByCodigo(req.params.codigo)

    res
      .status(200)
      .json(data)
  }

  //permite agregar un departamento
  async addDepartamento(req, res, next) {
    const newDepartamento = Departamento()({
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      volumen: req.body.volumen
    })

    const data = await newDepartamento.save()

    res
      .status(201)
      .json(data)
  }

  //permite editar un departamento en base a la ID
  async editDepartamentoById(req, res, next) {
    const newDepartamento = {
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      volumen: req.body.volumen
    }

    const data = await Departamento()
      .findOneAndUpdate(
        { _id: req.params.id },
        newDepartamento
      )

    return res
      .status(200)
      .json(data)
  }

  //permite eliminar un departamento en base a la ID
  async deleteDepartamento(req, res, next) {

    const dDepartamento = {
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      volumen: req.body.volumen
    }

    const data = await Departamento()
      .remove(
        { _id: req.params.id },
        dDepartamento
      )

    return res
      .status(200)
      .json(data)

  }
}

export default new DepartamentosController()
