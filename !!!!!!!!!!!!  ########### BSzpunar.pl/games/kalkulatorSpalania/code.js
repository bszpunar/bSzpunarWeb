
function licz()
{
	
	var litry = document.getElementById('litry').value;
	var km = document.getElementById('km').value;
	var score = document.getElementById('score');
	
	var wynik = 0;
	
	
	wynik = litry/km;
	wynik = wynik * 100;
	score.innerHTML = wynik + "  litra";
}