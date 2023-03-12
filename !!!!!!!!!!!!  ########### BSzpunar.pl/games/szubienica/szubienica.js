var haslo = "Igrzyska Śmierci";
var podpowiedz = "Kategoria: Film";
haslo = haslo.toUpperCase();

var dl_hasla= haslo.length;
var skucha = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var win = new Audio("win.MP3");
var lose = new Audio("lose.MP3");



var haslo1 = "";


for (i=0;i<dl_hasla;i++)
{
	if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}




function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
	
}





window.onload = start;

var signs = new Array(35);

signs[0] = "A";
signs[1] = "Ą";
signs[2] = "B";
signs[3] = "C";
signs[4] = "Ć";
signs[5] = "D";
signs[6] = "E";
signs[7] = "Ę";
signs[8] = "F";
signs[9] = "G";
signs[10] = "H";
signs[11] = "I";
signs[12] = "J";
signs[13] = "K";
signs[14] = "L";
signs[15] = "Ł";
signs[16] = "M";
signs[17] = "N";
signs[18] = "Ń";
signs[19] = "O";
signs[20] = "Ó";
signs[21] = "P";
signs[22] = "Q";
signs[23] = "R";
signs[24] = "S";
signs[25] = "Ś";
signs[26] = "T";
signs[27] = "U";
signs[28] = "V";
signs[29] = "W";
signs[30] = "X";
signs[31] = "Y";
signs[32] = "Z";
signs[33] = "Ż";
signs[34] = "Ź";


function start()
{
	
	var tresc_alfabetu = "";
	
	
	
	for(j=0;j<=34;j++)
	{
		var element = "sign" + j;
		tresc_alfabetu = tresc_alfabetu + '<div class="litera" onclick="sprawdz('+j+')" id="'+element+'">'+signs[j]+'</div>';
		if ((j+1) % 7 ==0) tresc_alfabetu = tresc_alfabetu + '<div style="clear:both;"></div>';
	}

	document.getElementById("alfabet").innerHTML = tresc_alfabetu;
	
	wypisz_haslo();
	document.getElementById("help").innerHTML = podpowiedz;
}


String.prototype.ustawZnak = function(miejsce, znak)
{
	if(miejsce > this.length - 1) return this.toString();
	else return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
	
}

function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0;i<dl_hasla;i++)
	{
		
		if(haslo.charAt(i) == signs[nr])
		{
			haslo1 = haslo1.ustawZnak(i,signs[nr]);
			trafiona = true;
		}
		
		
	}
	if(trafiona == true)
	{
		yes.play();
		var element = "sign" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "sign" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		
		//skucha
		
		skucha++;
		var obraz = "img/s"+ skucha + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
		
		
	}
	
	//wygrana
	if(haslo == haslo1)
	{
		win.play();
		document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+
		'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ? </span>';
	}
	
	//przegrana
	if(skucha >= 9)
	{
		lose.play();
		document.getElementById("alfabet").innerHTML = "GAME OVER"+
		'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ? </span>';

	}
}
