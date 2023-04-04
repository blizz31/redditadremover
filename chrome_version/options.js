
function saveOptions(e) {
	
	if (document.getElementById("ConsoleLoggingYes").checked) {
	chrome.storage.local.set({
		RARConsoleLogging: true
	    }); 
	}
	else {
	chrome.storage.local.set({
		RARConsoleLogging: false
	    }); 	 	  
	}

	if(e) {
		e.preventDefault();
	}

}

function restoreOptions() {
  let storageItem = chrome.storage.local.get('RARConsoleLogging');
  storageItem.then((res) => {	
		if (res.RARConsoleLogging) {
			document.getElementById("ConsoleLoggingYes").checked = true;
		}
		else {
			document.getElementById("ConsoleLoggingNo").checked = true;
		}
    
  });
    
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
