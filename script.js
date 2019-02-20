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