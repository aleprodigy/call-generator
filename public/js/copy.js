$(function() {
    $("#saida").click(function () {
        $(this).select();
        document.execCommand('copy');
    })
})