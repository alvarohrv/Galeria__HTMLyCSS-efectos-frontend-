const spanBurger=document.querySelector('.span-burger_-div-navbar') /** Disparador */

const navMenu=document.querySelector('.nav_-header')
const ulMenu=document.querySelector('.ul-menu_-nav')

const nodeList_itemsSubMenuAll=document.querySelectorAll('#idItemWhitSubM01')
const ulSubMenu1=document.querySelector('#idUlwhitSubM01')

/*
IN : nav-mostrar-menu  ul-mostrar-menu : sincronos
OUT : ul-mostrar-menu (primero) nav-mostrar-menu (segundo)  
*/

if(window.innerWidth<820){//solo en movil
    //ojo no escucha evento de resderizado de la pantalla
    //por tanto no funciona si empiza de pantalla grande y achica la pantalla
    
    spanBurger.addEventListener('click',fnDesplazarYmostrarMenu)
    nodeList_itemsSubMenuAll.forEach((submenu)=>{
        submenu.addEventListener('click',fnMustraSubMenu)
    })
    
    function fnMustraSubMenu(){
            if(ulSubMenu1.classList.contains('mostrar-submenu')){
                ulSubMenu1.classList.remove('mostrar-submenu')
                setTimeout(()=>{
                    ulMenu.removeAttribute('style')
                },500)
            }else{
                ulSubMenu1.classList.add('mostrar-submenu')
                ulMenu.style.height='auto' /** Permite altura dinamica del ulPrincipal */
            }
    }
    
    function fnDesplazarYmostrarMenu(){
            if(navMenu.classList.contains('nav-mostrar-menu')){
                ulMenu.removeAttribute('style')
                ulSubMenu1.classList.remove('mostrar-submenu')
                setTimeout(()=>{
                    ulMenu.classList.remove('ul-mostrar-menu')
                },1)
                setTimeout(()=>{
                    navMenu.classList.remove('nav-mostrar-menu')
                },500)
            }else{
                navMenu.classList.add('nav-mostrar-menu')
                setTimeout(()=>{
                    ulMenu.classList.add('ul-mostrar-menu')
                },2)
            }
    }
    
    let prueba = document.querySelector('.prueba')
    prueba.addEventListener('click',()=>{
        prueba.classList.toggle('cambio')
    })
}





