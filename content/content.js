var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL('../popup/popup.html');
iframe.className = 'css-desk-popup';
iframe.id = 'desk-iframe';
iframe.frameBorder = 0;
iframe.style.display = 'none';
document.body.appendChild(iframe);

chromeps.subscribe('commands', function(message) {
  if (message === 'toggle-open') {
    if (iframe.style.display == 'none'){
      iframe.style.display = 'initial';
      get_content();
    }else{
      iframe.style.display = 'none';
    }
  }
});

