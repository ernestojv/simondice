      const btnEmpezar = document.getElementById('btnEmpezar');
      const celeste = document.getElementById('celeste');
      const violeta = document.getElementById('violeta');
      const naranja = document.getElementById('naranja');
      const verde = document.getElementById('verde');
      class Juego {
        constructor(){
          this.init();
          this.generateSequence();
        }
        init(){
          btnEmpezar.classList.add('hide');
          this.level = 1;
          this.colors = {
              celeste,
              violeta,
              naranja,
              verde
          }
        }
        generateSequence(){
            this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random()*4)); 
        }
      }

     function empezarJuego(){
       window.juego = new Juego();
     }