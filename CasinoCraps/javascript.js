var CC_GLOBALS = (function()
{
	var dieRoll1;
	var dieRoll2;
	var wins;
	var losses;
	CC_GLOBALS.dieSumOutput;
});

	//Initialize variables in CC_GLOBALS object
	CC_GLOBALS.dieRoll1 = 7;
	CC_GLOBALS.dieRoll1 = 11;
	CC_GLOBALS.wins = 0;
	CC_GLOBALS.losses = 0;
	CC_GLOBALS.dieSumOutput = 0;

function CC_rollDice()
{
	//Rolls a number between 1 and 6 for the dice.
	CC_GLOBALS.dieRoll1 = Math.round((Math.random() * 5) + 1);
	CC_GLOBALS.dieRoll2 = Math.round((Math.random() * 5) + 1);

	//Sum of the dice.
	CC_GLOBALS.dieSumOutput = CC_GLOBALS.dieRoll1 + CC_GLOBALS.dieRoll2;

	//Sets the output of the second div to the sum of the two dice.
	document.getElementById("display_output_output").innerHTML = (CC_GLOBALS.dieSumOutput);

	//Sets the innerHTML of the dice graphics in div1
	document.getElementById("die1").innerHTML = CC_GLOBALS.dieRoll1;
	document.getElementById("die2").innerHTML = CC_GLOBALS.dieRoll2;

	//If the sum of the dice equals 7 or 11, increment a win and apply to innerHTML of wins_counter.
	if(CC_GLOBALS.dieRoll1 + CC_GLOBALS.dieRoll2 == 7 || CC_GLOBALS.dieRoll1 + CC_GLOBALS.dieRoll2 == 11)
	{
		CC_GLOBALS.wins++;
		document.getElementById("wins_counter").innerHTML = "Wins: " + CC_GLOBALS.wins;
		document.getElementById("display_message_heading").innerHTML = "Winner!!!";
	}
	//If the sum of the dice do not equal 7 or 11, increment a loss and apply to innerHTML of losses_counter.
	else
	{
		CC_GLOBALS.losses++;
		document.getElementById("losses_counter").innerHTML = "Losses: " + CC_GLOBALS.losses;
		document.getElementById("display_message_heading").innerHTML = "Play again!";
	}
}	

//Resets all of the values to default to start a new game.
function CC_clearStats()
{
	CC_GLOBALS.dieRoll1 = 0;
	CC_GLOBALS.dieRoll2 = 0;
	CC_GLOBALS.wins = 0;
	CC_GLOBALS.losses = 0;
	CC_GLOBALS.dieSumOutput = 0;

	document.getElementById("die1").innerHTML = 7;
	document.getElementById("die2").innerHTML = 11;
	document.getElementById("wins_counter").innerHTML = "Wins: " + 0;
	document.getElementById("losses_counter").innerHTML = "Losses: " + 0;	
	
	document.getElementById("display_output_output").innerHTML = 0;
	document.getElementById("display_message_heading").innerHTML = "Roll the dice!";

}