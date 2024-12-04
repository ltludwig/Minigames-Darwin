
class Draggable {

  constructor(img,x, y, w, h,order,gab) {
    let acabou = false;
    this.ponto = false;
    this.gab = gab;
    this.cartela = false;
    this.slideright =false;
    this.slideleft =false;
    this.order = order;
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.ativado = true;
  }

  show() {
    //print("Clicado?: "+ clicado);

    let taxa_rotacao_right = map(this.x, width/2, width, 0, 30);
    let taxa_rotacao_left = map(this.x, width/2, 0, 0, -30);
    stroke(0);
    push();
    imageMode(CENTER);
    translate(this.x,this.y+250);
      if(this.x > width/2-180){
        rotate(taxa_rotacao_right);
      }
     else{
       rotate(taxa_rotacao_left)
     }
    image(this.img,0,0);
    pop();
  


    if(this.order == rodada){
            if(mouseX >990 && mouseX< 1090 && mouseY >300 && mouseY<500 && clicado ==true){
                cursor('pointer');
                this.slideright = true;
                if(this.gab ==1){
                  println("Acertou");
                  //clicado = false;
                  placar++;
                }
                else{
                  println("Errou");
                  //clicado = false;
                }
            }
      
        else if(mouseX >70 && mouseX< 230 && mouseY >300 && mouseY<500 && clicado == true){
          cursor('pointer');
          this.slideleft = true;
          if(this.gab ==1){
            println("Errou");
              //clicado = false;
            
          }
          else{
            println("Acertou");
              // clicado = false;
              placar++;
           }
          
        }
        else{
          cursor('default');
          //cursor('cross');

        }
        

         if(clicado){
          // clicado = false;
         }



        if(this.slideright == true){
          if(this.x<1600){
            this.x+=50;
            if(effect.isPlaying()==false){
            effect.play();
            }
            //clicado = false;
          }
          else{
            this.cartela = true;
            //print(this.cartela);
            this.slideright = false;
            //rodada--;
            //clicado = false;
          }


        }
        else if(this.slideleft == true){
          if(this.x>-500){
            this.x-=50;
            if(effect2.isPlaying()==false){
            effect2.play();
            }
            //clicado = false;
          }
          else{
            this.cartela = true;
            //print(this.cartela);
            this.slideleft = false;
            //rodada--;
            //clicado = false;
          }
          
        }

            if(this.cartela == true){
              //print("Cartela é true");
              background(153, 130, 72,200);
              imageMode(CENTER);
              image(cartelas[rodada],width/2,height/2);
              imageMode(CORNER);
              //clicado = false;

              if(clicado == true){
                 this.cartela = false;
                 background(153, 130, 72);
                 rodada--;
                 //clicado = false;

               }
            
        }

  
clicado= false;

  }


}

restart(){




}

 
}



