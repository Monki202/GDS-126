/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/Startbutton.png"
startButton.width=256;
startButton.height=128;
startButton.hitBoxWidth=100000
startButton.y = 400;
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MenuBackground.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

var Music = new Audio("sounds/my sounds/my sounds/electrictheme_2.wav")
Music.loop = true;
Music.volume = 0.08;

var Ambience = new Audio("sounds/my sounds/my sounds/mixkit-road-traffic-sound-2463.wav")
Ambience.loop = true;
Ambience.volume = 0.1;

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			Music.play()
			Ambience.play()
		}

		//Hover Effect Graffic
		startButton.img.src = "images/StartButtonPress.png"
	}
	else
	{
		//Default Button Graphic
		
		startButton.img.src = "images/StartButtonNoPress.png"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
}
	
	
