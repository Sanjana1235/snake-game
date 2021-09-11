


function setup(){
createCanvas(500,500)

edges = createEdgeSprites()
wall1 = createSprite(250,10,500,20)
wall1.shapeColor = "blue"

wall2 = createSprite(250,480,500,40)
wall2.shapeColor = "blue"

wall3 = createSprite(490,250,20,500)
wall3.shapeColor = "blue"

wall4 = createSprite(10,250,20,500)
wall4.shapeColor = "blue"

wall5 = createSprite(250,490,500,20)
//wall5.shapeColor = "transparent"
wall5.visible = false

box = createSprite(250,250,20,20)
box2 = createSprite(270,250,20,20)
box3 = createSprite(290,250,20,20)

random_box = createGroup()


}



function draw(){
	background("pink")
	
	if(keyDown("LEFT_ARROW")){
		box.velocityX = -5
		box.velocityY = 0
        box2.x = box.x+20


	}

	if(keyDown("RIGHT_ARROW")){
		box.velocityX = 5
		box.velocityY = 0
	}

	if(keyDown("DOWN_ARROW")){
		box.velocityY = 5
		box.velocityX = 0
	}

	if(keyDown("UP_ARROW")){
		box.velocityY = -5
		box.velocityX = 0
	}

	box.collide(edges)
    box.collide(wall5)

	if(random_box.isTouching(box)){
		box2.x = box.x+20
		box3.x = box2.x+20
		box2.y = box.y
		box3.y = box2.y
	}
	

randbox();
	
drawSprites();
}


function randbox(){
	num1 = Math.round(random(50,450))
	num2 = Math.round(random(50,450))
	if(frameCount % 200 == 0){
		randombox = createSprite(num1,num2,20,20)
        randombox.lifetime=200;
		random_box.add(randombox)
	}
	

	
}