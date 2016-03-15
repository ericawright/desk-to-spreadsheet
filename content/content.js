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
    var date = $('.date')[0].innerHTML;
    var formatted_date = new Date(date.trim().replace(/st|rd|th|at.*$/g, ''));
    var m_d_y_date = ((formatted_date.getMonth() + 1) + '/' + formatted_date.getDate() + '/' +  formatted_date.getFullYear());

    var subject = $('#ticket_subject').val();
    var direct_link = $('.agent_ticket_section input[name="direct_link[subject]"]').val();
    var customer_name = $('.idtab[data-tab="customer"] .a-details.a-ellipsis').text();
    var company = $('.idtab[data-tab="company"] .a-details.a-ellipsis').text();

    chromeps.publishActive('commands', {'record_info': {subject: subject, direct_link: direct_link, customer_name: customer_name, date: m_d_y_date, company: company}});
}
