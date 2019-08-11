var numSquares=6;
var colors =generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");

var pickedColor=pickColor();
var colorDisplay=document.getElementById("colordisplay");
var messageDisplay= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


 easyBtn.addEventListener("click",function(){
 	messageDisplay.textContent="";
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	  for(var i=0;i< squares.length;i++)
	  {
		if(colors[i])
		  {
			squares[i].style.background=colors[i];
		  }
		else
			squares[i].style.display="none";
	  }
	  h1.style.background="steelblue";
    });


 hardBtn.addEventListener("click",function(){
 	messageDisplay.textContent="";
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0;i< squares.length;i++)
	{
		
			squares[i].style.background=colors[i];
		    squares[i].style.display="block";
	}
	h1.style.background="steelblue";
    });


    resetButton.addEventListener("click" , function(){
	colors=generateRandomColors(numSquares);
	messageDisplay.textContent="";
	this.textContent="new colors";
	pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
	
	for(var i=0;i< squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
})

colorDisplay.textContent=pickedColor;

    for(var i=0;i<squares.length;i++)
  {
      squares[i].style.background=colors[i];

 
      squares[i].addEventListener("click",function()
      {
	      var clickedcolor = this.style.background;
	      if(clickedcolor===pickedColor) 
              {   messageDisplay.textContent="Correct";
        	      alert("**Correct**");
                  changeColors(clickedcolor);
                  h1.style.background=clickedcolor;
                  resetButton.textContent="Play Again";
              }
	      else 
		      {this.style.background="#232323";
               messageDisplay.textContent="Try Again"; 

              }
      });
  }	


    function changeColors(color)
    {
	    for (var i = 0; i <squares.length; i++)
	     {
	       squares[i].style.background=color;
	     }
    }


    function pickColor()
    {
	    var random = Math.floor(Math.random() * colors.length);
	    return colors[random];
    }


    function generateRandomColors(num)
    {
         var arr=[];
          for(var i=0;i<num;i++)
        {     
	     arr.push(randomColor())
        }
       return arr;
    }


    function randomColor()
    {

	   var r=Math.floor( Math.random() * 256);
	   var g=Math.floor( Math.random() * 256);
	   var b=Math.floor( Math.random() * 256);
       return "rgb(" + r + ", " + g + ", " + b + ")";

   }