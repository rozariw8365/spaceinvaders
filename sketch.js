function setup(){
    createCanvas(800,600);
    fill("light grey");
    noStroke();
    colorMode(HSB, 255);
    var c = color(0, 126, 255);
    fill(c)
    var value = 100;
    fill(value);
    rect(200,200, 50, 30);
}

function Character(){
	this.x = 200
	this.y = 200
	this.gravity = 1
	this.d = 1

	this.move = function(){
		if(key==''){
			this.y -= this.jumpVel
			this.jumpVel -= this.gravity
		}
		if(this.y >=340){
			this.y=340
		}
		if(this.y <=10){
			this.y= 10
		}
		if(this.x >= 390 || this.x <=10){
			this.d *= -1
		}
		this.x += this.d
		console.log(this.d)
	}
}



