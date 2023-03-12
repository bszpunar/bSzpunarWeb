
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const cW = canvas.width;
const cH = canvas.height;

let paletteWidth = 120;
let paletteHeight = 20;

let ballSize = 20;

let ballX = cW/2 - ballSize/2;
let ballY = cH/2 - ballSize/2;

let paletteX = cW/2-paletteWidth/2;
let paletteY = cH - 40;

 
let ballMoveX = 2;
let ballMoveY = 4;

let heart = 3;

function palette()
{
	ctx.fillStyle = "yellow";
	ctx.fillRect(paletteX, paletteY, paletteWidth, paletteHeight);
}

function speedUP()
{
	if(ballMoveX > 0 && ballMoveX < 8)
	{
		ballMoveX += 0.2 ;
	}
	else if(ballMoveX < 0 && ballMoveX < 8)
	{
		ballMoveX -= 0.2;
	}
	
	
	if(ballMoveY > 0 && ballMoveY < 8)
	{
		ballMoveY += 0.2;
	}
	else if(ballMoveY < 0 && ballMoveY < 8)
	{
		ballMoveY -= 0.2;
	}
}

function ball()
{
	ctx.fillStyle = "green";
	ctx.fillRect(ballX, ballY, ballSize, ballSize);
	
	ballY += ballMoveY;
	ballX += ballMoveX;
	
	
	if(ballY <= 0)
	{
		ballMoveY = -ballMoveY;
	}
	
	if(ballY >= cH-ballSize)
	{
		heart--;
		
		ballX = cW/2 - ballSize/2;
		ballY = cH/2 - ballSize/2;
	}
	
	if(ballX <= 0 || ballX >= cW-ballSize)
	{
		ballMoveX = -ballMoveX;
	}
	
	
	if(ballY >= paletteY-paletteHeight && ballX >= paletteX && ballX <= paletteX+paletteWidth)
	{
		ballY + 4;
		if(ballX >= paletteX && ballX <= paletteX + 40)
		{
			ballMoveY = -ballMoveY - 1;
			ballMoveX = -ballMoveX;
			
		}
		
		if(ballX >= paletteX + paletteWidth-40 && ballX <= paletteX+paletteWidth )
		{
			ballMoveY = -ballMoveY - 1;
			ballMoveX = -ballMoveX;
			
		}
		
		if(ballX >= paletteX+40 && ballX <= paletteX + 80)
		{
			ballMoveY = -ballMoveY + 0.2;
			
		}
		
	}
	
	
	
}


function board()
{
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,cW,cH);
}


const move = (e) =>
{
	console.log(e.keyCode)
	
	switch(e.keyCode)
	{
		case 37:
			paletteX -= 40;
			break;
		case 39:
			paletteX += 40;
			break;
		default:
			console.log("Bad Key");
	}
}

function game()
{
	board();
	palette();
	ball();
}


window.addEventListener("keydown", move);
setInterval(game, 1000/60);