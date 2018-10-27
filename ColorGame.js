var square = document.querySelectorAll(".square");
var colors = generateColor(numSquare);
var numSquare = 6;
var messageDisplay = document.querySelector("#message");
var pickedColor = colorNumber();
var colorDisplay = document.getElementById("colorDisplay");
var reset = document.querySelector("#reset"); 
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");



hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquare = 6;
	colors = generateColor(numSquare);
	pickedColor = colorNumber();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
});



easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquare =  3;
	colors = generateColor(numSquare);
	pickedColor = colorNumber();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
		}else{
			square[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
});

reset.addEventListener("click", function(){
	colors = generateColor(numSquare);
	pickedColor = colorNumber();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colors";
	messageDisplay.textContent = " ";
});



colorDisplay.textContent = pickedColor;


for(var i=0; i < square.length; i++){
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again";
		}else{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}




function changeColors(color){
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}



function colorNumber(){
	 var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}	
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g +", " + b + ")";
}