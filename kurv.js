/*
 * Dette script definerer klassen Kurv
*/


function Kurv(x, y, bredde, dybde, speed) {
    /* Den første del af funktionen er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet thisa
     */
    
    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [250,230,150];
    this.img = loadImage("Billeder/kurv.png");

    this.tegn = function() {
        fill(this.col);
       // rect(this.x+20, this.y+20, 20*2, 20*2);
        image(this.img, this.x, this.y, this.bred, this.dyb)
        text("", this.x,this.y);
    }

    this.move = function(tast) {
        if (tast == 'w' || tast== 'W') {
            this.y -= this.speed;
            if (this.y < 0) {this.y = 0};
        }

        if (tast == 's' || tast == 'S') {
            this.y += this.speed;
            if (this.y > height-this.dyb) {this.y = height - this.dyb};
        }
/* jeg har valgt at lave spillet lidt anderledes end normalt fordi dette syntes jeg var lidt sjovere
        if (tast == 'd' || tast == 'D') {
            this.x += this.speed;
           
        }

        if (tast == 'a' || tast == 'A') {
            this.x -= this.speed;
    
        }
        */
    }

    this.grebet = function(xa, ya, ra) {
        if ((ya < this.y+ra && ya > this.y-ra) && (xa > this.x+ra && xa > this.x-ra)) {
            return true;
        }
        else {
            return false;
        }
    }

} 