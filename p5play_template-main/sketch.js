var ball;
function setup() {
  createCanvas(500,800);
  ball=createSprite(200,400,55,65)
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
ball.position.x = ball.position.x+5
  }
  if(keyDown(LEFT_ARROW)){
    ball.position.x = ball.position.x-5
      }
      if(keyDown(DOWN_ARROW)){
        ball.position.y = ball.position.y+5
          }
          if(keyDown(UP_ARROW)){
            ball.position.y = ball.position.y-5
          }
drawSprites()
}




