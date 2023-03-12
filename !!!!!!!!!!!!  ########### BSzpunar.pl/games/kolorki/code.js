
const cardsColor = ["red", "red", "green", "green", "blue", "blue",
"brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue",
"cadetblue", "lightgreen", "lightgreen", "violet", "violet"];

let cards = document.querySelectorAll('div');
cards = [...cards];
const time = new Date().getTime();

let nr = "";
const para = [];

const licznikPar = cards.length/2;
let gameResult = 0;




function clickCard()
{
	
	
	
	nr = this;
	
	if(para[0] == nr) return;
	
	nr.classList.remove("hidden");
	
	if(para.length === 0)
	{
		para[0] = nr;
		return;
	}
	else
	{
		cards.forEach(card => 
		{
			card.removeEventListener("click", clickCard);
			
		})
		para[1] = nr;
		
		
		setTimeout(function(){
			if(para[0].className == para[1].className)
			{
				console.log("trafiles !");
				
				para.forEach( card =>{
					card.classList.add("off");
				});
				gameResult++;
				cards = cards.filter(card =>{
					!card.classList.contains("off")
				});
				if(licznikPar == gameResult)
				{
					console.lof("WYGRANA");
					const endtime = new Date().getTime();
					const gameTime = (endtime - time)/1000;
					alert(`Udało się! twoj Wynik to: ${gameTime}sekund`);
					location.reload();
				}
				
				
				
			}
			else
			{
				para.forEach( card => {
					card.classList.add("hidden");
				})
				
			}
			nr = "";
			para.length = 0;
			cards.forEach(card => {
			card.addEventListener("click", clickCard);
			})
			
		},1000);
		

		
	}
	
}


const init = function()
{
	
	
	
	
	cards.forEach(card => {
		const position = Math.floor(Math.random()*cardsColor.length);
		card.classList.add(cardsColor[position]);
		cardsColor.splice(position, 1);
		
		
	});
	
	setTimeout(function() {
		cards.forEach(card => {
			card.classList.add('hidden');
			card.addEventListener("click", clickCard);
		})
		
	}, 1000);
	
}

init();