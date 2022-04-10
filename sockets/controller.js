
const socketController=(socket) =>{
  console.log("cliente conectado",socket.id)
  socket.on('disconnect',()=>{
    console.log("cliente desconectado", socket.id);
  })
  socket.on('send-message',async(payload,callback)=>{
    // leyendo los mensajes
    socket.broadcast.emit('send-message',payload)
    const id=123456;
    callback(id)

  })
}

module.exports={
  socketController
}