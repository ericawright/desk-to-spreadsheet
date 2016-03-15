var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL('../popup/popup.html');
iframe.className = 'css-desk-popup';
iframe.id = 'desk-iframe';
iframe.style.display = 'none';
document.body.appendChild(iframe);

chromeps.subscribe('commands', function(message) {
    if (message === 'toggle-open') {
        chromeps.publishActive('commands', 'return_local_storage');
    }
    if (message['support_ticket_summary']) {
        console.log(message['support_ticket_summary']);
    }
});
