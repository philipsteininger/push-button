var n = 0;
$(document).ready(function() {
    $("#the-button").click(function () {
        $("#counter").text(n+=1);
    });
});