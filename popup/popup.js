chromeps.subscribe('commands', function(message) {
    if (message['record_info']) {
        localStorage.setItem('subject', message['record_info'].subject);
        localStorage.setItem('direct_link', message['record_info'].direct_link);
        localStorage.setItem('customer_name', message['record_info'].customer_name);
        localStorage.setItem('date', message['record_info'].date);
    }
    if (message === 'return_local_storage') {
        support_ticket_summary = {subject: localStorage['subject'], direct_link: localStorage['direct_link'], customer_name: localStorage['customer_name'], action: localStorage['action'], summary: localStorage['summary'], date: localStorage['date']};
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