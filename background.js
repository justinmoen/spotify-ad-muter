chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.mute) {
			chrome.tabs.update(sender.tab.id, {"muted": true});
		} else {
			chrome.tabs.update(sender.tab.id, {"muted": false});
		}
});