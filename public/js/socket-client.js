
const online=document.querySelector("#online");
const offline=document.querySelector("#offline");

const socket=io();

socket.on('connect',()=>{
  console.log("conectado");
  offline.style.display="none";
  online.style.display="";
})
socket.on('disconnect',()=>{
  console.log("desconectado del servidor")
  offline.style.display="";
  online.style.display="none";
})