//metodos utilizados en el controlador
import mongoose from 'mongoose'

const DepartamentosSchema = new mongoose.Schema(
  {
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    volumen: { type: Number, required: true }
  },
  {
    strict: false
  }
)

// Static methods
//metodo que permite la obtencion de un elemento mediante su ID
DepartamentosSchema.statics.getById = function (id) {
  return this.findOne({ _id: id })
    .lean()
    .exec()
}
//metodo que permite la obtencion de un elemento mediante su codido (en pruebas)
DepartamentosSchema.statics.getAll = function (cod) {
  return this.find({ codigo: cod })
    .lean()
    .exec()
}
//metodo que permite la obtencion de todos los elementos
DepartamentosSchema.statics.getAll = function () {
  return this.find()
    .sort({ title: 'asc' })
    .exec()
}
//exportamos la constante para poder usarla en otro punto de la aplicacion
export default DepartamentosSchema
