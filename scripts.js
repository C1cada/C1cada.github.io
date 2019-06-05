var numClicks = 0

function onClick(){
	numClicks += 1
	document.getElementById("number").innerHTML = "Number of clicks: " + numClicks;
}