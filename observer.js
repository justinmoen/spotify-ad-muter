var target = document.querySelector('head > title');
var observer = new window.WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
		var title = mutation.target.textContent;
		if (title.includes('Advertisement')) {
			chrome.runtime.sendMessage({mute: true});
		}
		else {
			chrome.runtime.sendMessage({mute: false});
		}
    });
});
observer.observe(target, { subtree: true, characterData: true, childList: true });