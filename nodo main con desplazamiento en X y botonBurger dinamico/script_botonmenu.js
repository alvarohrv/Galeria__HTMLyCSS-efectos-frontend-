  this.disparador = document.querySelector(".toogleMenu");
  this.nodowithFlag = document.querySelector(".navicon-button");
  disparador.addEventListener("click", ()=>{
    nodowithFlag.classList.toggle("open");
  })

/*
// ANTES se leia el ancla <a> para responder al evento o sus pseudo clases, algun ineficaz porque se podia dra clik a un area entre en ancla o las pseudoclases y no se creaba el efecto pero si desplegaba el menu, se refactorizo a una solucion mas sencilla que toma .toogleMenu como disparador y se recicla la clase flag .open sobre el nodo <a> para el efecto //

//antiguo codigo//

     class IndexForSiblings{
      static get(el){
        let children = el.parentNode.children;
        for(var i=0; i<children.length; i++){
          let child = children[i];
          if(child == el)
            return i;
        }
      }
    }

    class Toggler{
      constructor(selector){
        this.toggleByButton = this.toggleByButton.bind(this);
        this.content = document.querySelector(selector);
        this.itemsCount = this.content.querySelectorAll(".nav > * ").length;
        this.counter = 0;

        this.bindEvents();
      }

      bindEvents(){
        this.content.querySelectorAll(".nav a").forEach(item => {
          item.addEventListener("click", this.toggleByButton);
        });
      }

      toggleByButton(ev){
        let index = IndexForSiblings.get(ev.currentTarget);
        this.toggleTo(index);
      }

      toggleTo(index){
        this.content.querySelector(".nav a:nth-child("+(index+1)+")").classList.toggle("open");
      }
    }

    (function(){
      new Toggler(".content");
    })();
    */