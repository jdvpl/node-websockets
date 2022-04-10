const express = require('express');
const cors = require('cors');
class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.server=require('http').createServer(this.app);
    this.io=require('socket.io')(this.server)
    this.paths={
    }


    // middleware: son funcionalidads para el webserver
    this.middlewares();
    // rutas de mi app
    this.routes();
  }



  routes() {
    // this.app.use(this.paths.users, require('../routes/user.routes'))

  }
  listen() {
    this.server.listen(this.port, () => {
      console.log(`Corriendo http://localhost:${this.port}`)
    });
  }

  middlewares() {
    // usar cors
    this.app.use(cors());

    // directorio publico
    this.app.use(express.static("public"));


  }
}

module.exports = Server;