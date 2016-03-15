chromeps.subscribe('commands', function(message) {
    if (message['store_info']) {
        localStorage.setItem('subject', message['store_info'].subject);
        localStorage.setItem('direct_link', message['store_info'].direct_link);
        localStorage.setItem('customer_name', message['store_info'].customer_name);
    }
    if (message === 'return_local_storage') {
        support_ticket_summary = {subject: localStorage['subject'], direct_link: localStorage['direct_link'], customer_name: localStorage['customer_name'], action: localStorage['action'], summary: localStorage['summary']};
        chromeps.publishActive('commands', {'support_ticket_summary': support_ticket_summary});
    }
});

$('#ticket_submit').on('click', function(){
    $(this).prop('disabled','disabled');
    var summary = $('#ticket_summary').val();
    var action = $('#ticket_action').val();
    localStorage.setItem('summary', summary);
    localStorage.setItem('action', action);
});