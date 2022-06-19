// function tocaSom(idTecla, idSom){
//     var tecla = document.querySelector(idTecla);

//     tecla.addEventListener('click', function(){
//         var somTecla = document.querySelector(idSom).play();
//     });

// };

// var som1 = tocaSom('.tecla_pom','#som_tecla_pom');
// var som2 = tocaSom('.tecla_clap','#som_tecla_clap');
// var som3 = tocaSom('.tecla_tim','#som_tecla_tim');
// var som4 = tocaSom('.tecla_puff','#som_tecla_puff');
// var som5 = tocaSom('.tecla_splash','#som_tecla_splash');
// var som6 = tocaSom('.tecla_toim','#som_tecla_toim');
// var som7= tocaSom('.tecla_psh','#som_tecla_psh');
// var som8= tocaSom('.tecla_tic','#som_tecla_tic');
// var som9= tocaSom('.tecla_tom','#som_tecla_tom');

function tocaSom(idElementoAudio){
   var som =  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const sound = tecla.classList[1];
    const idAudio = `#som_${sound}`;

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    };
   
}




