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

function get_content(){
    var subject = $('#ticket_subject').val();
    var direct_link = $('.agent_ticket_section input[name="direct_link[subject]"]').val();
    var customer_name = $('.idtab[data-tab="customer"] .a-details.a-ellipsis').text();
    chromeps.publishActive('commands', {'store_info': {subject: subject, direct_link: direct_link, customer_name: customer_name}});
}
