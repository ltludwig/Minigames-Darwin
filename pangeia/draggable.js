// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
  constructor(nome,x, y,w,h,gab1x,gab1y,gab2x,gab2y,visible) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.encaixou = false;
    this.visible = visible;
    this.x = x;
    this.gab1x = gab1x;
    this.gab1y = gab1y;
    this.gab2x = gab2x;
    this.gab2y = gab2y;
    this.nome = nome;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.certo = false;
  }

  over() {

    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;

    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show1() {

    stroke(0);
    if (this.dragging) {
      tint(255, 127);
    } else if (this.rollover) {
      tint(255, 127);
    } else {
      tint(255,255,255,255);
    }

    if(this.visible == 0 ){
      //image(this.nome, this.x+2, this.y+2, this.w, this.h);
      image(this.nome, this.x, this.y, this.w, this.h);
    }

  }

  show2() {
    stroke(0);
    if (this.dragging) {
      tint(255, 127);
    } else if (this.rollover) {
      tint(255, 127);
    } else {
      tint(255,255,255,255);
    }
    if(this.visible == 1){
    image(this.nome, this.x, this.y, this.w, this.h);
    }
  }



  pressed() {

    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
      sound6.play();
    }
  }

  check(){
    if(this.visible == 0 ){
      if(this.dragging== false){
        if(this.x > this.gab1x-30 && this.x < this.gab1x+30 && this.y > this.gab1y-30 && this.y < this.gab1y+30){
          this.x = this.gab1x;
          this.y = this.gab1y;
          //sound1.play();
          this.encaixou =true;
          this.certo = true; 
    }
    else{
      this.certo = false;
      }
    }
  }
 else {
    if(this.dragging== false){
      if(this.x > this.gab2x-30 && this.x < this.gab2x+30 && this.y > this.gab2y-30 && this.y < this.gab2y+30){
        this.x = this.gab2x;
        this.y = this.gab2y;
        this.certo = true;
        }
      else{
        this.certo = false;
        }
      }
    }
}

  released() {
    // Quit dragging
    this.dragging = false;

  }

  sorteio1(){
     this.x = random(100,width-200);
     this.y = random(100,height-200);
  }

    sorteio2(){
     this.x = random(100,width-200);
     this.y = random(100,height-200);
  }

  resolve1(){
    this.x = this.gab1x;
    this.y = this.gab1y;

  }

    resolve2(){
    this.x = this.gab2x;
    this.y = this.gab2y;

  }

   vis(){
    this.x = this.gab2x;
    this.y = this.gab2y;

  }

  
  
}