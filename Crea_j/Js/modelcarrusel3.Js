const btnAbrirModalq = document.querySelector("#btn3abrir3modal3");
const btnCerrarModalq = document.querySelector("#btn3cerrar3modal3"); 
const modalq = document.querySelector("#odal3");
btnAbrirModalq.addEventListener("click", ()=>{ 
    modalq.showModal();
})
btnCerrarModalq.addEventListener("click", ()=>{ 
    modalq.close();
})