
const online=document.querySelector("#online");
const offline=document.querySelector("#offline");

// formulario
const btnenviar=document.querySelector("#btnenviar");
const textMensaje=document.querySelector("#textMensaje");

const socket=io();

socket.on('connect',()=>{
  offline.style.display="none";
  online.style.display="";
})
socket.on('disconnect',()=>{
  console.log("desconectado del servidor")
  offline.style.display="";
  online.style.display="none";
})
// escuchando el emit del socket
socket.on('send-message',(payload)=>{
  console.log(payload)
})

// boton

btnenviar.addEventListener('click',()=>{
  const mensaje=textMensaje.value;
  const payload={
    mensaje,
    date:new Date().getTime()
  }
  socket.emit('send-message',payload,(id)=>{
    console.log("Desde el server",id)
  });
})