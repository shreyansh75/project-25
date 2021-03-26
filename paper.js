class Paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
            density:1.2,
            friction:0

			}
		this.x=x;
		this.y=y;
		this.r=r
        this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("gold")
            image (this.image,0,0,this.r,this.r)
			//rect(0,0,this.w, this.h);
			pop()
			
	}

}