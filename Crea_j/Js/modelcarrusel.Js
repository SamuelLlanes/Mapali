const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal"); 
const modal1 = document.querySelector("#modal");
btnAbrirModal.addEventListener("click", ()=>{ 
    modal1.showModal();
})
btnCerrarModal.addEventListener("click", ()=>{ 
    modal1.close();
})