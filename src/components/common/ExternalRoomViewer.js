import React, { Component } from "react";

function attachedJS(roomID) {
	// return (
	var iframeEl = document.createElement("iframe");
	iframeEl.setAttribute("id", "vrooms-iframe");
	iframeEl.setAttribute("src", "http://www.vrooms.us/show/" + roomID);
	iframeEl.setAttribute("allowfullscreen", "yes");
	iframeEl.setAttribute("allowvr", "yes");
	iframeEl.setAttribute("crossorigin", "true");
	iframeEl.style.display = "none";
	iframeEl.style.height = "100vh";
	iframeEl.style.width = "100vw";
	iframeEl.style.top = "0";
	iframeEl.style.left = "0";
	iframeEl.style.position = "fixed";
	iframeEl.style.zIndex = "999999";
	document.querySelector("body").appendChild(iframeEl);

	var btn = document.createElement("button");
	btn.innerHTML = "Exit 360 View";
	btn.setAttribute("id", "close-iframe");
	btn.style.background = "#333";
	btn.style.color = "#ffffff";
	btn.style.position = "fixed";
	btn.style.display = "none";
	btn.style.top = "1rem";
	btn.style.left = "1rem";
	btn.style.fontSize = "16px";
	btn.style.padding = "1em";
	btn.style.zIndex = "1000000";
	btn.style.border = "none";
	btn.style.outline = "none";
	btn.style.borderRadius = "5px";
	(btn.style.fontFamily = "Helvetica Neue"), "Roboto", "sans-serif";
	btn.style.cursor = "pointer";
	document.querySelector("body").appendChild(btn);

	document
		.getElementById("vrooms-toggle")
		.addEventListener("click", function() {
			document.getElementById("vrooms-iframe").style.display = "block";
			document.getElementById("close-iframe").style.display =
				"inline-block";
			this.classList.toggle("open");
		});

	document
		.getElementById("close-iframe")
		.addEventListener("click", function() {
			document.getElementById("vrooms-iframe").style.display = "none";
			this.style.display = "none";
		});
	// )
}

class ExternalRoomViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<a id="vrooms-toggle" className="ws-btn" href="#!">
				View in 360
			</a>
		);
	}
}
export default ExternalRoomViewer;
