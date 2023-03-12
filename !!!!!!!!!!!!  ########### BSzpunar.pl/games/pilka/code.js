
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const szerokosc = canvas.width;
const wysokosc = canvas.height;

const rozmiarpilki = 15;

let ruchPilkiX = -2;
let ruchPilkiY = 2;

let pilkaX = szerokosc/2 - rozmiarpilki/2;
let pilkaY = wysokosc/2 - rozmiarpilki/2;


const PasX = 40;
const PasY = wysokosc;

const widthLini = 5
const heightLini = 20;

const rozmiarBramkiX = 15;
const rozmiarBramkiY = 100;

const pilkaDoGry = new Image();

const pilkaDoGrySzerokosc = 48;
const pilkaDoGryWysokosc = 48;

let pilkaDoGryX = szerokosc/2-pilkaDoGrySzerokosc/2;
let pilkaDoGryY = wysokosc/2-pilkaDoGryWysokosc/2;

let player1X = 50;
let player1Y = wysokosc/2 - 50;

let player2X = 730;
let player2Y = wysokosc/2-50;

let punktyPlayer2 = 0;
let punktyPlayer1 = 0;


function gracz1()
{
	ctx.fillStyle = "blueviolet";
	ctx.fillRect(player1X, player1Y, 20,100 );
}
function gracz2()
{
	ctx.fillStyle = "blue";
	ctx.fillRect(player2X, player2Y, 20, 100 );
}

function points()
{
	ctx.font = "40px Arial";
	ctx.fillStyle = "blueviolet";
	ctx.fillText(punktyPlayer1,50,50);
	ctx.fillStyle = "blue";
	ctx.fillText(punktyPlayer2,720,50);
}


function pilka()
{

	ctx.drawImage(pilkaDoGry, pilkaDoGryX, pilkaDoGryY);
	
	pilkaDoGry.src = "img/pilka.png";
	
	
	pilkaDoGryX += ruchPilkiX;
	pilkaDoGryY += ruchPilkiY;
	
	if( pilkaDoGryX <= 0 )
	{
		pilkaDoGryX = szerokosc/2-pilkaDoGrySzerokosc/2;
		pilkaDoGryY = wysokosc/2-pilkaDoGryWysokosc/2;	
		punktyPlayer2 += 1;
		
		ruchPilkiX = -2;
		ruchPilkiY = 2;
	}

	if(pilkaDoGryX >= szerokosc - pilkaDoGrySzerokosc)
	{
		pilkaDoGryX = szerokosc/2-pilkaDoGrySzerokosc/2;
		pilkaDoGryY = wysokosc/2-pilkaDoGryWysokosc/2;
		punktyPlayer1 += 1;
		
		ruchPilkiX = -2;
		ruchPilkiY = 2;
	}

	if( pilkaDoGryY <= 0 || pilkaDoGryY >= wysokosc - pilkaDoGryWysokosc )
	{
		ruchPilkiY = -ruchPilkiY;
		speedUp();
	}
	
	if(player1X + 20 >= pilkaDoGryX && pilkaDoGryY <= player1Y+50 && pilkaDoGryY >= player1Y-50 )
	{
		pilkaDoGryX + 5;
		ruchPilkiX = -ruchPilkiX;
		speedUp();
	}
	
	if(player2X <= pilkaDoGryX+48 && pilkaDoGryY >= player2Y-50 && pilkaDoGryY <= player2Y+50)
	{
		pilkaDoGryX - 5;
		ruchPilkiX = -ruchPilkiX;
		speedUp();
	}

}

function bramkaLewa()
{
	ctx.fillStyle = 'blueviolet';
	
	for(let start=0; start<=wysokosc; start = start + 20)
	{
		ctx.fillRect(0, start, widthLini, heightLini);
	}
	
}


function bramkaPrawa()
{
	ctx.fillStyle = 'blue';
	
	for(let start=0; start<=wysokosc; start = start + 20)
	{
		ctx.fillRect(795, start, widthLini, heightLini);
	}
	
}





function boisko()
{
	ctx.fillStyle = 'green';
	ctx.fillRect(0,0, szerokosc, wysokosc);
	
	
	for(let poczatekRysuj=40 ; poczatekRysuj<=szerokosc; poczatekRysuj=poczatekRysuj+80)
	{
		ctx.fillStyle = '#00cc33';
		ctx.fillRect(poczatekRysuj, 0, PasX, PasY);
	}
	
	
	for(let startLini = 10; startLini < wysokosc; startLini=startLini+50)
	{
		ctx.fillStyle = '#000';
		ctx.fillRect(szerokosc/2 - widthLini/2, startLini, widthLini, heightLini);
	}
	
	
	
}

function speedUp()
{	
	if( ruchPilkiX > 0 && ruchPilkiX <= 5 )
	{
		ruchPilkiX = ruchPilkiX + 1;
	}
	else if (ruchPilkiX < 0 && ruchPilkiX >= -5)
	{
		ruchPilkiX = ruchPilkiX - 1;
	}

	
	if(ruchPilkiY > 0 && ruchPilkiY <= 5)
	{
		ruchPilkiY = ruchPilkiY + 1;
	}
	else if(ruchPilkiY < 0 && ruchPilkiY >= -5)
	{
		ruchPilkiY = ruchPilkiY -1
	}
}


function keep()
{
	
	
	
	boisko();
	pilka();
	bramkaLewa();
	bramkaPrawa();
	gracz1();
	gracz2();
	points();
}

const move = (e) =>
{
	console.log(e.keyCode);
	
	switch(e.keyCode)
	{

		case 38:
			if(player2Y > 0){player2Y = player2Y - 30;}
			break;
		case 40:
			if(player2Y < 300){player2Y = player2Y + 30;}
			break;
		case 87:
			if(player1Y > 0){player1Y = player1Y - 30;}
			break;
		case 83:
			if(player1Y < 300 ){player1Y = player1Y + 30;}
			break;
		
	}
	
	
}

window.addEventListener("keydown", move);


setInterval(keep, 1000/60);