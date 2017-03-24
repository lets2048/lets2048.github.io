var grid;
var score = 0;

function main()
{ 
	console.log("start");

	begin();
	document.addEventListener('keydown', move);

	






	console.log("end");
}

window.addEventListener('load', function(){
	main();
});

function begin()
{
	
	grid = [[' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' ']];
	console.log(grid);
	var row = Math.floor(Math.random() * 4);
	var col = Math.floor(Math.random() * 4);
	grid[row][col] = 2;
	console.log(grid);
	display();
}

function move(event)
{
	if(event.keyCode == 39)
	{ moveRight();

	}
	else if(event.keyCode == 37)
	{ moveLeft();

	}
	else if(event.keyCode == 38)
	{ moveUp();

	}
	else if(event.keyCode == 40)
	{ moveDown();

	} 
}	

function moveRight()
{ 
	console.log("right");
	for(var i=0; i <= 3; i++)
	{ console.log(i);
	  var j=3;
	  while(j>0)
	  { 
	  	if(grid[i][j] == ' ')
  		{

  		}
  		else
  		{ console.log("hey");
  		  var k = j-1;
  		  while(k >= 0)
  		  { if(grid[i][k] == grid[i][j])
  		  	{ grid[i][k] = ' ';
  		  	  grid[i][j] = grid[i][j] * 2;
  		  	  score = score + grid[i][j]; 
  		  	  break; 
  		  	}
  		  	else if(grid[i][k] == ' ')
  		  	{ if(k == 0)
  		  	  { for(var l=3; l>0; l--)
		  	  	{ if(grid[i][l] == ' ')
	 		      { grid[i][l] = grid[i][j];
	 		  	    grid[i][j] = ' ';
	 		  	    break;
	 		      }   
		  	    }
  		  	  }
  		  	  else
  		  	  	k--;
  		  	}
  		  	else
  		  	  break;
  		  }
  		  if(k==0 && grid[i][k] == ' ')
  		  { for(var l=3; l>0; l--)
		  	{ if(grid[i][l] == ' ')
	 		  { grid[i][l] = grid[i][j];
	 		  	grid[i][j] = ' ';
	 		  	break;
	 		  }  
		  	}
  		  }
  		}
  		j--;
	  }
	  if(j==0)
	  { for(var l=3; l>=0; l--)
	  	{ if(grid[i][l] == ' ')
 		  { grid[i][l] = grid[i][j];
 		  	grid[i][j] = ' ';
 		  	break;
 		  }
	  	}
	  }

	}
	insert()
	display();
}

function moveLeft()
{
	console.log("left");

	for(var i=0; i <= 3; i++)
	{ console.log(i);
	  var j=0;
	  while(j<3)
	  { 
	  	if(grid[i][j] == ' ')
  		{

  		}
  		else
  		{ console.log("hey");
  		  var k = j+1;
  		  while(k <= 3)
  		  { if(grid[i][k] == grid[i][j])
  		  	{ grid[i][k] = ' ';
  		  	  grid[i][j] = grid[i][j] * 2; 
  		  	  score = score + grid[i][j];
  		  	  break; 
  		  	}
  		  	else if(grid[i][k] == ' ')
  		  	{ if(k == 3)
  		  	  { for(var l=0; l<3; l++)
		  	  	{ if(grid[i][l] == ' ')
	 		      { grid[i][l] = grid[i][j];
	 		  	    grid[i][j] = ' ';
	 		  	    break;
	 		      }   
		  	    }
  		  	  }
  		  	  else
  		  	  	k++;
  		  	}
  		  	else
  		  	  break;
  		  }
  		  if(k==3 && grid[i][k] == ' ')
  		  { for(var l=0; l<3; l++)
		  	{ if(grid[i][l] == ' ')
	 		  { grid[i][l] = grid[i][j];
	 		  	grid[i][j] = ' ';
	 		  	break;
	 		  }  
		  	}
  		  }
  		}
  		j++;
	  }
	  if(j==3)
	  { for(var l=0; l<=3; l++)
	  	{ if(grid[i][l] == ' ')
 		  { grid[i][l] = grid[i][j];
 		  	grid[i][j] = ' ';
 		  	break;
 		  }
	  	}
	  }

	}

	insert()
	display();
	
}

function moveUp()
{
	console.log("up");
	for(var i=0; i <= 3; i++)
	{ console.log(i);
	  var j=0;
	  while(j<3)
	  { 
	  	if(grid[j][i] == ' ')
  		{

  		}
  		else
  		{ console.log("hey");
  		  var k = j+1;
  		  while(k <= 3)
  		  { if(grid[k][i] == grid[j][i])
  		  	{ grid[k][i] = ' ';
  		  	  grid[j][i] = grid[j][i] * 2; 
  		  	  score = score + grid[j][i];
  		  	  break; 
  		  	}
  		  	else if(grid[k][i] == ' ')
  		  	{ if(k == 3)
  		  	  { for(var l=0; l<3; l++)
		  	  	{ if(grid[l][i] == ' ')
	 		      { grid[l][i] = grid[j][i];
	 		  	    grid[j][i] = ' ';
	 		  	    break;
	 		      }   
		  	    }
  		  	  }
  		  	  else
  		  	  	k++;
  		  	}
  		  	else
  		  	  break;
  		  }
  		  if(k==3 && grid[k][i] == ' ')
  		  { for(var l=0; l<3; l++)
		  	{ if(grid[l][i] == ' ')
	 		  { grid[l][i] = grid[j][i];
	 		  	grid[j][i] = ' ';
	 		  	break;
	 		  }  
		  	}
  		  }
  		}
  		j++;
	  }
	  if(j==3)
	  { for(var l=0; l<=3; l++)
	  	{ if(grid[l][i] == ' ')
 		  { grid[l][i] = grid[j][i];
 		  	grid[j][i] = ' ';
 		  	break;
 		  }
	  	}
	  }

	}

	insert()
	display();
	
}

function moveDown()
{
	console.log("down");
	for(var i=0; i <= 3; i++)
	{ console.log(i);
	  var j=3;
	  while(j>0)
	  { 
	  	if(grid[j][i] == ' ')
  		{

  		}
  		else
  		{ console.log("hey");
  		  var k = j-1;
  		  while(k >= 0)
  		  { if(grid[k][i] == grid[j][i])
  		  	{ grid[k][i] = ' ';
  		  	  grid[j][i] = grid[j][i] * 2; 
  		  	  score = score + grid[j][i];
  		  	  break; 
  		  	}
  		  	else if(grid[k][i] == ' ')
  		  	{ if(k == 0)
  		  	  { for(var l=3; l>0; l--)
		  	  	{ if(grid[l][i] == ' ')
	 		      { grid[l][i] = grid[j][i];
	 		  	    grid[j][i] = ' ';
	 		  	    break;
	 		      }   
		  	    }
  		  	  }
  		  	  else
  		  	  	k--;
  		  	}
  		  	else
  		  	  break;
  		  }
  		  if(k==0 && grid[k][i] == ' ')
  		  { for(var l=3; l>0; l--)
		  	{ if(grid[l][i] == ' ')
	 		  { grid[l][i] = grid[j][i];
	 		  	grid[j][i] = ' ';
	 		  	break;
	 		  }  
		  	}
  		  }
  		}
  		j--;
	  }
	  if(j==0)
	  { for(var l=3; l>=0; l--)
	  	{ if(grid[l][i] == ' ')
 		  { grid[j][i] = grid[l][i];
 		  	grid[j][i] = ' ';
 		  	break;
 		  }
	  	}
	  }

	}
	insert()
	display();
	
}

function insert()
{
	$("#points").html(score);
	while(true)
	{ var row = Math.floor(Math.random() * 4);
	  var col = Math.floor(Math.random() * 4);
	  if(grid[row][col] == ' ')
	  { grid[row][col] = 2;
	  	break;
	  } 
	  console.log("hellow")
	}
}

function display()
{
	console.log(grid);
	$("#pos00").html(grid[0][0]);
	$("#pos01").html(grid[0][1]);
	$("#pos02").html(grid[0][2]);
	$("#pos03").html(grid[0][3]);
	$("#pos10").html(grid[1][0]);
	$("#pos11").html(grid[1][1]);
	$("#pos12").html(grid[1][2]);
	$("#pos13").html(grid[1][3]);
	$("#pos20").html(grid[2][0]);
	$("#pos21").html(grid[2][1]);
	$("#pos22").html(grid[2][2]);
	$("#pos23").html(grid[2][3]);
	$("#pos30").html(grid[3][0]);
	$("#pos31").html(grid[3][1]);
	$("#pos32").html(grid[3][2]);
	$("#pos33").html(grid[3][3]);

	for(var i=0; i<=3; i++)
	{ for(var j=0; j<=3; j++)
	  { if(grid[i][j] == 2)
	  	{ $("#pos" + i + j).css("background-color", "#eee4da");
	  	  $("#pos" + i + j).css("color", "#776e65");
	  	}
	  	else if(grid[i][j] == 4)
	  	{ $("#pos" + i + j).css("background-color", "#eee1c9");
	      $("#pos" + i + j).css("color", "#776e65");
	  	}
	  	else if(grid[i][j] == 8)
	  	{ $("#pos" + i + j).css("background-color", "#f3b27a");
	      $("#pos" + i + j).css("color", "#f9f6f2");
	  	}
	  	else if(grid[i][j] == 16)
	  	{ $("#pos" + i + j).css("background-color", "#f69664");
	      $("#pos" + i + j).css("color", "#f9f6f2");
	  	}
	  	else if(grid[i][j] == 32)
	  	{ $("#pos" + i + j).css("background-color", "#f77c5f");
	  	  $("#pos" + i + j).css("color", "#f9f6f2");
	  	}
	  	else
	  	{ $("#pos" + i + j).css("background-color", "#cdc1b4");
	  	}


	  }

	}
}

