
function showloader() {
    // $('#blur').addclass('blurclass');
    // $("#blur").css('opacity','0.2');
    // $("#loader").css('opacity','1 !important' );
    // alert("working");
    $("#tableDisplay").css('opacity','0.2');
    $(".loaderbtn").attr('disabled', true);
    $("#loader").show();

}

function hideloader() {
    $("#tableDisplay").css('opacity','1');
    $(".loaderbtn").attr('disabled', false);
    $("#loader").hide();

}
