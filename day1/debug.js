function debug(msg){
	var log = document.getElementById("debuglog");
	if(!log){
		log = document.createElement("div");
		log.id = "debuglog";
		log.innerHTML = "<h2>debug log</h2>"
		document.body.appendChild(log);
	}
	var pre = document.createElement("pre");
	var text = document.createTextNode(msg);
	pre.appendChild(text);
	log.appendChild(pre);
}