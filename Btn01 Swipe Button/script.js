/** con Movimiento unidireccional a la derecha */

const documentNode = document.documentElement;
const container = document.querySelector('.contBtnSwipe');
const buttonNode = document.querySelector('.aBtn');
const span = document.querySelector('.aBtn span');


//manejo estricto de los ESTADOS
let isMouseDownInSpan = false; 
let isMouseoverCont = false;
let clickCont = false
let clickON = false  // /* clickOn es verdadero cuando se ha hecho un swipe exitoso y el botón está activo */


container.addEventListener('mousemove', handleMouseMove);
//El evento mousemove percibe (detecta) cada movimiento del mouse dentro del elemento al que se le asigna el listener//

container.addEventListener('mouseover', () => {
  console.log('mouseover del elemento container');
  isMouseoverCont = true
});

container.addEventListener('mouseleave', () => {
  if(!clickON){
      console.log('<-mouseleave del elemento container sin clickOn');
      isMouseoverCont = false; /* mayor control */
      isMouseDownInSpan = false; /* mayor control */
  }
});


/* Eventos que son importantes para CONTEINER */
function handleMouseMove(event) {
  if (!isMouseDownInSpan || !isMouseoverCont) {
    /* Si el mouse no está presionado sobre el span o no está sobre el contenedor, no se hace nada */
    return;
  }  
    // Calcula el porcentaje de movimiento del mouse dentro del botón
    var mousePorctj = event.offsetX / container.offsetWidth;
    /*
    event.offsetX: es la posición horizontal del mouse dentro del contenedor
    container.offsetWidth: es el ancho del contenedor
    */
    console.log('mousePorctj',mousePorctj)//ira de 0 a 1,sin negativos
    if(mousePorctj>0.35){
      console.log('clickOn')

      let valorLeftMax = container.offsetWidth - span.offsetWidth - 5; 
      /* valorLeftMax: es el valor máximo que puede tener el span para que no se salga del contenedor */
      span.style.left = valorLeftMax + 'px';
      buttonNode.style.background = 'red'
      buttonNode.style.paddingLeft = '0px';
      buttonNode.style.paddingRight = '40px';

      isMouseDownInSpan = false;
      clickON = true
      clickCont = false /* realmente no hay un click si un swipe */
    }


    //Mejor el 'else' llevarlo a otra funcion pues es un evento que se ejecuta constantemente y genera comportamiento no deseado
    else{
      if(!clickON){
        span.style.left = event.offsetX + 'px';
      }
      // buttonNode.style.paddingLeft = (1 - mousePorctj) * 40 + 'px';
      // buttonNode.style.paddingRight = mousePorctj * 40 + 'px';
    }
    // TAREA PENDIENTE:
    // Implementar un efecto de movimiento de retorno

    
    // Modifica el estilo del elemento span y del texto 'Swipe Next' según el porcentaje de movimiento del mouse
    // span.style.left = distance + 'px';

}
// Esta función es la que se encarga de mover el span


/************************* */
/* Importante para el correcto funcionamiento */
container.addEventListener('click', ()=>{
  // console.log('clik contenedor!!!')
  ////NOTA: ocurre que:
  ///cuando se da el clickON tambien hay un clik contenedor y generaba un efecto no deseado
  //Por ello se hace una validadacion retardada del click:
  if(clickON && !clickCont){
    setTimeout(()=>{
      clickCont=true /* control sobre el clic */
    },400)
  } /* Es una forma de evitar que el click en el contenedor reinicie el estado del botón inmediatamente */

  if(clickON && clickCont){
    /* si clickON es verdadero y clickCont es verdadero, entonces se reinicia el estado del botón */
    buttonNode.style.outline = '1px solid white';
    span.style ='';
    buttonNode.style = '';
    isMouseDownInSpan = false;
    isMouseoverCont = false;
    clickON = false
  }
});

/************************* */

span.addEventListener('mousedown', handleMouseDown); /*cambio de estado de isMouseDownInSpan*/
// span.addEventListener('mouseup', handleMouseUp); /* evento no garantizado  */
documentNode.addEventListener('mouseup', handleMouseUp); /*el evento puede ocurrir en cualquier lugar - cambio de estado de isMouseDownInSpan*/
/* NOTA: El evento mouseup ocurre cuando el usuario suelta el botón del mouse después de haberlo presionado (mousedown) */
//span.addEventListener('mouseleave', handleMouseLeave); /*ya no se requiere*/
span.addEventListener('mouseover', () => {
    // console.log('mouseover_Cursor entra al elemento span');
  });
  
  /* Eventos que son importantes para SPAN */
  function handleMouseDown(e) { /* Evento+garantizado */
    isMouseDownInSpan = true;
    //clickON = true; // Se da click en el span   !!
    
    //test 
    // if(isMouseDownInSpan){
    //     span.style.background ='#04a321'; 
    // }
  }

  function handleMouseUp(e) { /* evento+garantizado en documentNode */
      //clickON = false; // Se suelta el click en el span
      isMouseDownInSpan = false;
      //span.style.background ='blue'; //test
      if (!clickON && !isMouseDownInSpan) {
        span.style = '';
        buttonNode.style = '';
      }
  }

  function handleMouseLeave(e) {} /* evento NO garantizado !! si mantiene el clickSostenido cuando sale de span =/ */
/************************* */
 


  