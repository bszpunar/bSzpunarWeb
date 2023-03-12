const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


canvas.width = 600;
canvas.height = 450;

const RacketSize = 48;


const cW = canvas.width;
const cH = canvas.height;

const bulletSizeX = 4;
const bulletSizeY = 10;

let RacketX = cW/2 - RacketSize/2;
let RacketY = cH - 60;

let BulletX = RacketX + 21;
let BulletY = RacketY;
var BulletGO = false;

const RacketIMG = new Image();

RacketIMG.src = "img/racket.png";

const BombIMG = new Image();

BombIMG.src = "img/bomb.png";

let BombX = Math.random()*600;
let BombY = 0

let fallSpeed = 0.8;

let HP = 3;
let score = 0;

const HpIMG = new Image();

HpIMG.src = "img/heart.png";

let EndGame = " GAME OVER <br> Your score: " + score;

function scoreGame()
{
	ctx.font = "40px Verdana";
	ctx.fillStyle = "#efefef";
	ctx.fillText(HP, 95, 55);
	ctx.drawImage(HpIMG, 40 , 20);
	ctx.fillText(score, cW/2, cH/2);
}

function Enemy()
{
	BombY += fallSpeed;
	ctx.drawImage(BombIMG, BombX - 32, BombY);
	
	if(BombY >= 386)
	{
		HP -= 1;
		BombY = 0;
		BombX = Math.random()*600;
		if(BombY <= 4)
		{
			fallSpeed += 0.1;
		}
	}
	
	if(BulletY <= BombY + 62 && BulletX + bulletSizeX >= BombX - 32 && BulletX <= BombX + 32)
	{
		BombY = 0;
		BombX = Math.random()*600 - 1;
		if(BombY <= 4)
		{
			fallSpeed += 0.1;
		}
		score += 1;
	}
	
	
}

function drawRacket()
{
	ctx.drawImage(RacketIMG, RacketX, RacketY);
}

function fire()
{
	
	ctx.fillStyle = "red";
	ctx.fillRect(BulletX, BulletY, bulletSizeX, bulletSizeY );
	
	BulletY -= 7;
}

function board()
{
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0, cW, cH);
}

const move = (e) => {
	
	console.log(e.keyCode);
	
	switch(e.keyCode)
	{
		case 37:
			RacketX = RacketX - 25;
			BulletX = BulletX - 25;
			break;
		case 39:
			RacketX = RacketX + 25;
			BulletX = BulletX + 25;
			break;
		case 32:
			BulletGO = true;
			break;
		
	}
}


window.addEventListener('keydown', move);

function game()
{
	board();
	drawRacket();
	if(BulletGO == true)
	{
		fire();
		if(BulletY <= 0)
		{
			BulletGO = false;
			BulletY = RacketY;
		}
	}
	Enemy();
	scoreGame();
	
	if(HP <= 0)
	{
		ctx.font = "24px Verdana";
		ctx.fillStyle = "#000";
		ctx.fillRect(0,0,cW,cH);
		ctx.fillStyle = "#efefef";
		ctx.fillText(" GAME OVER Your score: " + score, 50, cH/2);
	}
	
}

setInterval(game, 1000/60);