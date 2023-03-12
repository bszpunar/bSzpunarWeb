
var MyThinksText = document.getElementById('MyThinksText');


function MyThinksButton(){
	MyThinksText.value = `Co będzie gdy twój czas sie skończy ? Ta chwila nadejdzie z pewnością, jedno jest pewne: 
					Nasz czas jest policzony
					
					Gdy nadejdzie twój kres co będziesz mógł o sobie powiedzieć ?
					Jedni powiedzą że nie miałeś nic, inni mówią że miałeś wszystko.
					
					A zapytaj siebie czy uważasz że jesteś 'SPEŁNIONY W ŻYCIU.
					
					Kiedyś amerykański filozof i pisarz Benjamin Franklin powiedział:
					Dramatem życia jest to, że starzejemy się zbyt szybko, a mądrzejemy zbyt późno.
					
					Niektórzy uważają że kiedy w życiu nie będą się spieszyć to będą żyć na luzie i z większą swobodą,
					lecz nic bardziej mylnego. Jeżeli chcesz powiedzieć pod koniec życia że spełniłeś swoje życiowe cele musisz
					znaleźć swoją Pasje . . . . . .`
					
					
	alert(MyThinksText.value);
	
}



var str = document.getElementById('strWyszukaj');

function findString(){
	
	
	let stringFound;
	
	if(window.find){
		var container = document.getElementById('container');
		stringFound = window.find(str.value);
		if(!stringFound){
			stringFound = window.find(str.value, 0, 1);
			while(window.find(str.value, 0, 1)) continue;
		}
	}
	if(!stringFound) alert(str.value + " Brak wyników");
	return;
	
}


