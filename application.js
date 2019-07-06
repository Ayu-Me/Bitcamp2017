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
	switch(itemNum) {
		case 1:
			kCode = 65;
			break;
		case 2:
			kCode = 83;
			break;
		case 3:
			kCode = 68;
			break;
		case 4:
			kCode = 70;
			break;
		case 5:
			kCode = 74;
			break;
		case 6:
			kCode = 75;
			break;
		case 7:
			kCode = 76;
			break;
		case 8:
			kCode = 186;
			break;
		break;
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