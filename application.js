// Amy Yu

var scoreNum;

function showMenu()
{
	showPage('menu');
}

function showPage(page)
{
	document.getElementById("menu").style.display = "none";
	document.getElementById("gamePage").style.display = "none";
	document.getElementById("endScreen").style.display = "none";
	document.getElementById(page).style.display = "block";
}

function playGame()
{
	scoreNum = 0;
	var finished = false;
	generateNext();
}

function generateNext()
{
	var kCode = 0;
	var itemNum = (Math.random()*7) + 1;
	itemNum = Math.round(itemNum);
	document.getElementById("item").src = "images/item" + itemNum + ".png";
	if (itemNum == 1)
	{
		kCode = 65;
	}
	if (itemNum == 2)
	{
		kCode = 83;
	}
	if (itemNum == 3)
	{
		kCode = 68;
	}
	if (itemNum == 4)
	{
		kCode = 70;
	}
	if (itemNum == 5)
	{
		kCode = 74;
	}
	if (itemNum == 6)
	{
		kCode = 75;
	}
	if (itemNum == 7)
	{
		kCode = 76;
	}
	if (itemNum == 8)
	{
		kCode = 59;
	}	
	var petNum = (Math.random()*15) + 1;
	petNum = Math.round(petNum);
	document.getElementById("pet").src = "images/pet" + petNum + ".png";
	checkInput(kCode);
}

function checkInput(kCode)
{
	window.onkeyup = function(e)
	{
		var key = e.keyCode ? e.keyCode : e.which;
		if (key == kCode)
		{
			scoreNum++;
			generateNext();
		}
		else
		{
			scoreNum--;
		}
		updateScore();
	}
}

function updateScore()
{
	document.getElementById("scoreTxt").innerHTML = "Score: " + scoreNum;
}

function endGame()
{
	showPage('endScreen');
	document.getElementById("result").innerHTML = "Your score: " + scoreNum;
}