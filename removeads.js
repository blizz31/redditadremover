
var consoleLogging = false;

function apply() {

	var hostname = window.location.hostname;
	
	var css = "#adunit{display:none !important;}.promotedlink{display:none;}.avKlJzxZU3brq4nAX0_i1{display:none;}._1G4yU68P50vRZ4USXfaceB{display:none;}.premium-banner-outer{display:none;}shreddit-comment-tree-ad{display:none !important;}";
	
	var cssLink = document.getElementById("reddit-ad-remover");
	if (hostname.includes("reddit")) {		
		if (consoleLogging) {
			console.log("[Reddit Ad Remover] Ad remover applied.");
		}
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
	
	let storageItem = browser.storage.local.get('RARConsoleLogging');
		storageItem.then((res) => {
		consoleLogging = res.RARConsoleLogging;
		apply();
	});
	
};

