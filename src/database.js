//fichero que se encarga de la conexion con la BBDD (MongoDB)
import mongoose from 'mongoose'
import { config } from 'dotenv'

const SETTINGS = config()

class Database {
  constructor () {
    this.conn = false
  }

  connection () {
    return this.conn
  }

  connect () {
    //constante que contendra la informacion de la conexion con MongoDB. El protocolo, la URL, el puerto y el DB_Name se obtienen del
    //fichero .env
    const host = `${SETTINGS.parsed.DB_PROTOCOL}://${SETTINGS.parsed.DB_URL}:${SETTINGS.parsed.DB_PORT}/${SETTINGS.parsed.DB_NAME}`

    //si no hay ningun problema se conectara sin problemas
    return new Promise(resolve => {
      mongoose.set('debug', SETTINGS.parsed.DB_DEBUG)
      mongoose.Promise = global.Promise

      this.conn = mongoose.createConnection(
        host,
        { poolSize: SETTINGS.parsed.DB_POOLSIZE }
      )

      //si ocurre algun error nos monstrara un mensaje en la consola
      this.conn.on('error', err => {
        console.log('Mongo Error', err)
        return process.exit()
      })

      //si todo va bien mostrara un mensaje satisfactorio en la consola
      this.conn.on('connected', () => {
        console.log('Connected to Database')
        resolve()
      })
    })
  }
}

const instance = new Database()
//exportarmos la constante instance para poder usarla en otro punto de la API
export default instance
