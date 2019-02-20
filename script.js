function allowDrop(ev) {
	ev.preventDefault();
}

function drag(event) {
	event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));
}

function red() {
	window.onclick = document.getElementById("para1").style.color = 'red';
}

function green() {
	window.onclick = document.getElementById("para2").style.color = 'green';
}

function blue() {
	window.onclick = document.getElementById("para3").style.color = 'blue';
}

function fontChange(paraId) {
	window.onclick = document.getElementById(paraId).style.fontFamily = 'Roboto';
}

function fontChangePara2() {
	window.onclick = document.getElementById("para2").style.fontFamily = 'cursive';
}




