const btnAbrirModala = document.querySelector("#btn2abrir2modal2");
const btnCerrarModala = document.querySelector("#btn2cerrar2modal2"); 
const modala = document.querySelector("#odal2");
btnAbrirModala.addEventListener("click", ()=>{ 
    modala.showModal();
})
btnCerrarModala.addEventListener("click", ()=>{ 
    modala.close();
})