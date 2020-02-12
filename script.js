//Handles the "navigation buttons" functions
function menuHandler(event)
{
	//Handles the color of the menu items when clicked.
	var menu = document.getElementsByClassName("navItems");
	for (i = 0; i < menu.length; i++)
	{
		menu[i].style.background = "#BBB";
	}
	
	// event.target.style.background = "#EEE";

	if((event.target.innerHTML) == "Home")
	{
		document.getElementsByTagName("iframe")[0].setAttribute("src", "Home/index.html");
	}	
	else
	if((event.target.innerHTML) == "Casino Craps")
	{
		document.getElementsByTagName("iframe")[0].setAttribute("src", "CasinoCraps/CasinoCraps.html");
	}
	else
	if((event.target.innerHTML) == "Tic Tac Toe")
	{
		document.getElementsByTagName("iframe")[0].setAttribute("src", "TicTacToe/TicTacToe.html");
	}

}