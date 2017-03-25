var grid;
var score = 0;

function main()
{ 
	console.log("startMain");

	begin();
	document.addEventListener('keydown', move);

	console.log("endMain");
}

window.addEventListener('load', function(){
	main();
});

function begin()
{
	console.log("startBegin");
	grid = [[' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' ']];
	var row = Math.floor(Math.random() * 4);
	var col = Math.floor(Math.random() * 4);
	grid[row][col] = 2;
	display();
	console.log("endBegin");
}

function move(event)
{
	
	console.log("startMove");
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
	console.log("endMove");

}	

function moveRight()
{ 
	console.log("startMoveRight");
	for(var i=0; i <= 3; i++)
	{ var j=3;
	  while(j>0)
	  { 
	  	if(grid[i][j] == ' ')
  		{

  		}
  		else
  		{ var k = j-1;
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
	console.log("endMoveRight");

}

function moveLeft()
{
	console.log("startMoveLeft");

	for(var i=0; i <= 3; i++)
	{ 
	  var j=0;
	  while(j<3)
	  { 
	  	if(grid[i][j] == ' ')
  		{

  		}
  		else
  		{ var k = j+1;
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
	console.log("endMoveleft");
	
}

function moveUp()
{
	console.log("startMoveUp");
	for(var i=0; i <= 3; i++)
	{ 
	  var j=0;
	  while(j<3)
	  { 
	  	if(grid[j][i] == ' ')
  		{

  		}
  		else
  		{ var k = j+1;
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
	console.log("endMoveUp");

	
}

function moveDown()
{
	console.log("startMoveDeown");
	for(var i=0; i <= 3; i++)
	{ 
	  var j=3;
	  while(j>0)
	  { 
	  	if(grid[j][i] == ' ')
  		{

  		}
  		else
  		{ var k = j-1;
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
	console.log("endMoveDown");
	
}

function insert()
{
	console.log("startInsert");
	$("#points").html(score);
	while(true)
	{ var row = Math.floor(Math.random() * 4);
	  var col = Math.floor(Math.random() * 4);
	  if(grid[row][col] == ' ')
	  { grid[row][col] = 2;
	  	break;
	  } 
	}
	console.log("endInsert");

}

function display()
{
	console.log("startDisplay");
	for(var i=0; i<=3; i++)
	{ for(var j=0; j<=3; j++)
		$("#pos" + i + j).html(grid[i][j]);	
	}

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
	console.log("endDisplay");

}

