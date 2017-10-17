import React from "react";

const ExternalRoomViewer = props => {
	function toggleIframe() {
		var iframe = document.getElementById("vrooms-iframe");
		var isVisible = iframe.getAttribute("data-visible");

		if (isVisible === "no") {
			iframe.style.display = "block";
			iframe.style.visibility = "visible";
			iframe.style.zIndex = "9999";
			iframe.setAttribute("data-visible", "yes");
		} else {
			iframe.style.display = "none";
			iframe.style.visibility = "hidden";
			iframe.style.zIndex = "-9999";
			iframe.setAttribute("data-visible", "no");
		}
	}

	return (
		<a id="vrooms-toggle" href="#" onClick="toggleIframe()">
			Toggle iframe
			<script type="text/javascript">{toggleIframe()}</script>
			<iframe
				id="vrooms-iframe"
				data-visible="no"
				style="height: 100vh; width: 9; display: none; visibility: hidden; zIndex: -9999;"
				src="http://www.vrooms.us/show/59e1b4ce41f8990012a65cba"
				allowfullscreen="yes"
				allowvr="yes"
				crossorigin="true"
			/>
		</a>
	);
};
export default ExternalRoomViewer;
