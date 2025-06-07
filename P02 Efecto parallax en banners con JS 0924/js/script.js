// alert('hola')
window.onscroll = function(){

    //var posicion = window.pageYOffset | document.documentElement.scrollTop;  /// FORMA ANTIGUA _ DEPRECADO solo usar:
    var posicion = document.documentElement.scrollTop;
    console.log("posicion: ".posicion)

    var elem_heart = document.getElementById("icon_heart");
    var elem_fire = document.getElementById("icon_fire");

    elem_heart.style.bottom = posicion * 0.2 + "px";
    //el ícono #icon_heart se mueve más lento que el scroll normal (0.2x).
    elem_fire.style.top = posicion * 0.25 + "px";
     //el ícono #icon_fire se mueve más lento que el scroll normal (0.25x).
}
/*
0	No se mueve
0.2	Se mueve lentamente
1	Se mueve igual que el scroll
>1	Se mueve más rápido que el scroll
*/


