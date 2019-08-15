function plushie(speedNed, speedHen, res, grav) {
    /* Den første del af funktionen er en "konstruktør".
     * Den tager paboldrmetrene og konstruerer et nyt objekt 
     * ud fboldr dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet thisa
     */
    
    this.x = 350;
    this.y = 0;
    this.xSpeed = speedHen;
    this.ySpeed = speedNed;
    this.col = [250,230,150];
    this.img = loadImage("Billeder/kurv.png");

    this.display = function() {
      if(this.y == 0)  this.y = rad+10;
        fill(this.col);
    ellipse(this.x,this.y, rad);
        //image(this.img, this.x, this.y, this.bred, this.dyb)
    }
    this.fall = function(){

        this.x += speedHen;

        this.y += speedNed;

        speedHen *= 1-res;

        speedNed *= grav;
    }




}