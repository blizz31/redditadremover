

function apply() {
	
	document.getElementsByClassName('_1G4yU68P50vRZ4USXfaceV')[0].className = "_1G4yU68P50vRZ4USXfaceB";
	
	var css = "#adunit{display:none !important;}.promotedlink{display:none;}.avKlJzxZU3brq4nAX0_i1{display:none;}._1G4yU68P50vRZ4USXfaceB{display:none;}";
	var cssLink = document.getElementById("reddit-ad-remover");
	var hostname = window.location.hostname;
	if (hostname.includes("reddit")) {
		console.info("[Reddit Ad Remover] Ad remover applied.");
		if (cssLink == null) {
			var cssLink = document.createElement("style");
			cssLink.setAttribute("type", "text/css");
			cssLink.setAttribute("id", "reddit-ad-remover");
			cssLink.textContent = css;
			document.documentElement.appendChild(cssLink);
			return;
		}
		else {
			cssLink.textContent = css;
			return;
		}				
	} 
}

window.onload = (event) => {
  apply();
};