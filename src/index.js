//Este fichero crea el servidor en el puerto que nosotros indiquemos. Esta realizado con Express
import express from 'express'

import config from './config'
import router from './router'
import db from './database'

let _server //variable que contedra nuestro servidor que luego exportaremos

const server = {
  start () {
    const app = express()

    //conectamos el servidor. Si todo ha salido bien nos mostrara un mensaje en la consola con la ruta y el puerto
    return db.connect()
      .then(() => {
        config(app)
        router(app)

        _server = app.listen('9000', () => {
          const address = _server.address()
          const host = address.address === '::'
            ? 'localhost'
            : address

          const port = '9000'

          console.log(`Server opened listen on http://${host}:${port}`)
        })

        return _server
      })
  },
  close () {
    _server.close()
  }
}

//exportarmos la constante server para poder utilizarla en otro punto de la API
export default server

if (!module.parent) {
  server.start()
}
//Si ocurre algun error se nos notificara a traves de este codigo
process.on('unhandledRejection', (err, p) => {
  console.log('Custom Error: An unhandledRejection oc∫curred')
  console.log(`Custom Error: Rejection: ${err}`)
})
