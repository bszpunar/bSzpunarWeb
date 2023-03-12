
const kolo = document.querySelector(".kolo");
const pozycja = document.querySelector(".pozycja");




const move = (e) =>
{
	console.log(e.keyCode);
	
	pozycja.textContent = `wartość x: ${kolo.offsetLeft}, wartość y: ${kolo.offsetTop}`;
	
	switch(e.keyCode)
	{
		//lewo
		case 37:
			kolo.style.left = kolo.offsetLeft - 25 + "px";
			break;
		//gora
		case 38:
			kolo.style.top = kolo.offsetTop - 25 + "px";
			break;
		//prawo
		case 39:
			kolo.style.left = kolo.offsetLeft + 25 + "px";
			break;
		//dół
		case 40:
			kolo.style.top = kolo.offsetTop + 25 + "px";
			break;
		case 32:
		
			const red = Math.floor(Math.random()*256);
			const green = Math.floor(Math.random()*256);
			const blue = Math.floor(Math.random()*256);
			
			kolo.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
			break;
		default:
			pozycja.textContent = "Nieznany Klawisz";
			break;
		
	}
	
}



	

window.addEventListener("keydown", move);