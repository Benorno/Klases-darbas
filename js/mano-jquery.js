$('#settings').hide();

$('#btn_settings').click(function () {
    $("#settings").show('slow');
    $('#home').hide('slow')
});

$('#btn_home').click(function () {
    $('#settings').hide('slow');
    $('#home').show('slow')
});