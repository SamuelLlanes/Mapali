const btnAbrirModals = document.querySelector("#btn1abrir1modal1");
const btnCerrarModals = document.querySelector("#btn1cerrar1modal1"); 
const modals = document.querySelector("#odal1");
btnAbrirModals.addEventListener("click", ()=>{ 
    modals.showModal();
})
btnCerrarModals.addEventListener("click", ()=>{ 
    modals.close();
})