chromeps.subscribe('commands', function(message) {
    if (message['record_info']) {
        localStorage.setItem('subject', message['record_info'].subject);
        localStorage.setItem('direct_link', message['record_info'].direct_link);
        localStorage.setItem('customer_name', message['record_info'].customer_name);
        localStorage.setItem('date', message['record_info'].date);
        localStorage.setItem('company', message['record_info'].company);
    }
    if (message === 'return_local_storage') {
        support_ticket_summary = {subject: localStorage['subject'], direct_link: localStorage['direct_link'], customer_name: localStorage['customer_name'], action: localStorage['action'], summary: localStorage['summary'], date: localStorage['date'], further_action: localStorage['further_action'], account_type: localStorage['account_type'], labels: localStorage['labels'], company: localStorage['company']};
        chromeps.publishActive('commands', {'support_ticket_summary': support_ticket_summary});
    }
});

$('#ticket_submit').on('click', function(){
    $(this).prop('disabled','disabled');
    var summary = $('#ticket_summary').val();
    var action = $('#ticket_action').val();
    var further_action = $('#further_action').val();
    var account_type = $('#account_type').val();
    var labels = $('#ticket_labels').val();

    localStorage.setItem('summary', summary);
    localStorage.setItem('action', action);
    localStorage.setItem('further_action', further_action);
    localStorage.setItem('account_type', account_type);
    localStorage.setItem('labels', labels);
});

$('.overlay').on('click', function(){
    chromeps.publishActive('commands', "toggle_open");
});
