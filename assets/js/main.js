// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
let logo = document.getElementById('logo');
let contnav = document.getElementsByClassName('contenedor-nav')[0];

console.info(contnav);
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 50){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '0px';
        abrir.style.color = '#fff';
        logo.setAttribute("src", "assets/img/logoblanco.svg");
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '0px';
        abrir.style.color = '#FF9933';
        logo.setAttribute("src", "assets/img/logonaranja.svg");
    }
}

function apertura(){
    if(cerrado){        
        menu.style.width = '200px';
        menu.style.top = '0px';
        cerrado = false;
    }else{        
        menu.style.width = '0%';
        menu.style.top = '0px';
        menu.style.overflow = 'hidden';
        
        cerrado = true;
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click',function(e){
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir && e.target !== menu){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            contnav.classList.remove('openmenu');
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function(){
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    contnav.classList.add('openmenu');
    apertura();
});