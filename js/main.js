//Contagem Regressiva------------------------------------

var target_date = new Date("march 01, 2021").getTime();
var dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");

setInterval(function () {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
document.getElementById('hora').innerHTML = horas;
document.getElementById('minuto').innerHTML = minutos;
document.getElementById('segundo').innerHTML = segundos;

}, 1000);

//------------------------------------------------------

//Alerta de Saida---------------------------------------
let modal = document.getElementById('siteModal')
        
function popUp () {
   modal.classList.toggle('show')
   modal.style.display = 'block'
}

function fechaPopUp () {
    modal.classList.remove('show')
    modal.style.display = 'none'
}
//window.onbeforeunload = function(){alert ("Deseja mesmo sair do site?")};
//------------------------------------------------------