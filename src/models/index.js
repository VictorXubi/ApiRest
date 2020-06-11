import db from '../database'

import DepartamentosSchema from './departamentos'

export const Departamento = () =>
  db.connection().model('Departamento', DepartamentosSchema)
