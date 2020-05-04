      const btnEmpezar = document.getElementById('btnEmpezar');
      const celeste = document.getElementById('celeste');
      const violeta = document.getElementById('violeta');
      const naranja = document.getElementById('naranja');
      const verde = document.getElementById('verde');
      const topLevel = 5;
      class Juego {
        constructor(){
          this.init = this.init.bind(this);
          this.init();
          this.generateSequence();
          setTimeout(this.nextLevel,500);
        }
        init(){
          this.nextLevel = this.nextLevel.bind(this);
          this.selectColor = this.selectColor.bind(this);
          this.toggleBtnEmpezar();
          this.level = 1;
          this.colors = {
              celeste,
              violeta,
              naranja,
              verde
          }
        }
        toggleBtnEmpezar(){
          if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
          }else{
            btnEmpezar.classList.add('hide');
          }
        }
        generateSequence(){
            this.sequence = new Array(topLevel).fill(0).map(n => Math.floor(Math.random()*4)); 
        }
        nextLevel(){
          this.illuminateSequence();
          this.addClickEvent();
          this.subLevel = 0;
        }
        numberToColor(num){
          switch(num){
            case 0:
              return 'celeste';
            case 1:
              return 'violeta';
            case 2:
              return 'naranja';
            case 3:
              return 'verde';
          }
        }
        colorToNumber(color){
          switch(color){
            case 'celeste':
              return 0;
            case 'violeta':
              return 1;
            case 'naranja':
              return 2;
            case 'verde':
              return 3;
          }
        }
        illuminateSequence(){
          for(let i = 0; i < this.level; i++){
            let color = this.numberToColor(this.sequence[i]);
            
            setTimeout(()=>this.illuminateColor(color),1000*i);
          }
        }
        illuminateColor(color){
          this.colors[color].classList.add('light');
          setTimeout(() => this.turnOfColor(color),350);
        }
       
        turnOfColor(color){
          this.colors[color].classList.remove('light');
        }
        
        addClickEvent(){
          this.colors.celeste.addEventListener('click',this.selectColor);
          this.colors.violeta.addEventListener('click',this.selectColor);
          this.colors.naranja.addEventListener('click',this.selectColor);
          this.colors.verde.addEventListener('click',this.selectColor);
        }
        deleteClickEvent(){
          this.colors.celeste.removeEventListener('click',this.selectColor);
          this.colors.violeta.removeEventListener('click',this.selectColor);
          this.colors.naranja.removeEventListener('click',this.selectColor);
          this.colors.verde.removeEventListener('click',this.selectColor);
        }
        selectColor(ev){
          const colorName = ev.target.dataset.color;
          const colorNum = this.colorToNumber(colorName);
          this.illuminateColor(colorName);
          if(colorNum === this.sequence[this.subLevel]){
            this.subLevel++;
            if(this.subLevel === this.level){
              this.level++;
              this.deleteClickEvent();
              if(this.level === (topLevel +1)){
               this.win();
              }else{
                setTimeout(this.nextLevel,1500);
              }
            }
          }else{
            this.lose();
          }
        }
        win(){
          swal('Ganaste!','Felicitaciones, ganaste el juego','success')
          .then(()=>(this.init()));
        }
        lose(){
          swal('Perdiste!','Lo lamento, perdiste el juego','error')
          .then(()=>{
            this.init();
            this.deleteClickEvent();
          });
        }
      }

     function empezarJuego(){
       var juego = new Juego();
     }