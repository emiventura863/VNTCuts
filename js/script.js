// Creá una variable llamada botonesFiltro y guardá en ella todos los botones que estén dentro del div con clase filtroportfolio.
const botonesFiltro = document.querySelectorAll(".filtroportfolio button");
const videos = document.querySelectorAll(".trabajosportfolio [data-categoria]");

botonesFiltro.forEach(function(boton){

    boton.addEventListener("click", function(){

        botonesFiltro.forEach(function(b){

            b.classList.remove("activo");

});

    boton.classList.add("activo");

    const filtro = boton.getAttribute("data-filtro");

        videos.forEach(function(video){ 

            const categoria = video.getAttribute("data-categoria");

            if(filtro === "todos" || filtro === categoria){
                video.style.display = "block";
            }else{
                video.style.display = "none";
            }

        });

    });

});