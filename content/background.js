chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      chromeps.publishActive('commands', 'toggle_open');
  });
});