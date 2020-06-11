import departamentos from './routes/departamentos'

export default app => {
  app.use('/Departamentos', departamentos)
}
