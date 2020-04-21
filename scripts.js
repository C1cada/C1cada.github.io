var data = 0
var expected = 10

function onClick(){
	data += 1
	document.getElementById("currency").innerHTML = "Data: " + data;
    if (data >= expected){
        CheckImprovemnt()
    }
}

function CheckImprovemnt(){
    if (data >= 10 && expected == 10){
        var HelloWorld = document.createElement("BUTTON");

        HelloWorld.innerHTML = "Hello World <span class='tooltip'> Hi </span>";
        HelloWorld.classList.add('button');
        document.body.appendChild(HelloWorld);

        expected = 50
    }
}   
