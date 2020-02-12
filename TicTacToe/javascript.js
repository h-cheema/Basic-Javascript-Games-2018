var TTT_GLOBALS = (function()
{
  var cellCount = 0;
});

TTT_GLOBALS.cellCount = 0;

//Sets the letters of the cells and checks the win conditions each time a letter is set.
function setLetter(event)
{
  //Decides on which letter to place. Either X or O depending on which players turn it is.
  //If there is already a letter placed, then the innerHTML does not change.
  if((event.target.innerHTML) != "X" && (event.target.innerHTML) != "O")
  {

    // Updates clicked cell. Finds the element by the listener event's target.
    if ((document.getElementById("message").innerHTML) == "Player X's turn")
    {
      event.target.innerHTML = "X";
      event.target.style.color = "blue";
    }
    if ((document.getElementById("message").innerHTML) == "Player O's turn")
    {
      event.target.innerHTML = "O";
      event.target.style.color = "red";

    }

    // Changes who's turn it is along with the instruction message.
    if((document.getElementById("message").innerHTML) === "Player X's turn")
    {
      document.getElementById("message").innerHTML = "Player O's turn";
    }
    else if ((document.getElementById("message").innerHTML) === "Player O's turn")
    {
      document.getElementById("message").innerHTML = "Player X's turn";
    }
    
  }
}

//Checks for wins (3 X's or O's in a row) each time a cell is clicked.
//Checks for rows, columns, and diagnonals.
function winChecker()
{

  //Puts the td elements into an array that can be accessed.
  var rowCheckX = document.getElementsByTagName("td");

  //Not the best way to check for win conditions, but it is organized and works well
  if(
    //Checks for rows of X
    (rowCheckX[0].innerHTML + (rowCheckX[1]).innerHTML + (rowCheckX[2]).innerHTML) == "XXX" ||
    (rowCheckX[3].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[5]).innerHTML) == "XXX" ||
    (rowCheckX[6].innerHTML + (rowCheckX[7]).innerHTML + (rowCheckX[8]).innerHTML) == "XXX" ||

    //Checks for columns of X
    (rowCheckX[0].innerHTML + (rowCheckX[3]).innerHTML + (rowCheckX[6]).innerHTML) == "XXX" ||
    (rowCheckX[1].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[7]).innerHTML) == "XXX" ||
    (rowCheckX[2].innerHTML + (rowCheckX[5]).innerHTML + (rowCheckX[8]).innerHTML) == "XXX" ||
    
    //Checks for diagonals of X
    (rowCheckX[0].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[8]).innerHTML) == "XXX" ||
    (rowCheckX[6].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[2]).innerHTML) == "XXX" )
  {
    document.getElementById("message").innerHTML = "Player X wins!";
    document.getElementById("message").style.color = "blue";
  }
  else 
  if(
    //Checks for rows of O
    (rowCheckX[0].innerHTML + (rowCheckX[1]).innerHTML + (rowCheckX[2]).innerHTML) == "OOO" ||
    (rowCheckX[3].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[5]).innerHTML) == "OOO" ||
    (rowCheckX[6].innerHTML + (rowCheckX[7]).innerHTML + (rowCheckX[8]).innerHTML) == "OOO" ||

    //Checks for columns of O
    (rowCheckX[0].innerHTML + (rowCheckX[3]).innerHTML + (rowCheckX[6]).innerHTML) == "OOO" ||
    (rowCheckX[1].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[7]).innerHTML) == "OOO" ||
    (rowCheckX[2].innerHTML + (rowCheckX[5]).innerHTML + (rowCheckX[8]).innerHTML) == "OOO" ||
    
    //Checks for diagonals of O
    (rowCheckX[0].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[8]).innerHTML) == "OOO" ||
    (rowCheckX[6].innerHTML + (rowCheckX[4]).innerHTML + (rowCheckX[2]).innerHTML) == "OOO" )
  {
    document.getElementById("message").innerHTML = "Player O wins!";
    document.getElementById("message").style.color = "red";
    
  }

  // No winner, all cells full.
  for(i = 0; i < rowCheckX.length; i++)
  {

    var cellCountTemp = 0;
    if(rowCheckX[i].innerHTML == "X" || rowCheckX[i].innerHTML == "O")
    {
      ++TTT_GLOBALS.cellCount;
    }

    if(TTT_GLOBALS.cellCount == (rowCheckX.length))
    {
      document.getElementById("message").innerHTML = "Draw!";
      document.getElementById("message").style.color = "orange";
    }

  }
  
  TTT_GLOBALS.cellCount = cellCountTemp;

}


//Clears the innerHTML of the table cells and resets all values to default.
//More efficient than reloading the whole page.
function resetGame() 
{
  var cells = document.getElementsByTagName("td");
  TTT_GLOBALS.cellCount = 0;

  for (var i=0; i<cells.length; i++) {
    cells[i].innerHTML = "";
    document.getElementById("message").style.color = "black";
  }

  document.getElementById("message").innerHTML = "Player X's turn";
}