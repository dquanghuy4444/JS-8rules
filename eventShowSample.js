$("#btnSampleRule1").click(
    function()
    {
        $("#listInput").val(inputList1);
        $("#labelSample").empty();
        $("#labelSample").append("Sample for rule 1");
    }
)

$("#btnSampleRule2").click(
    function()
    {
        $("#listInput").val(inputList2);
        $("#labelSample").empty();
        $("#labelSample").append("Sample for rule 2");
    }
)

$("#btnSampleRule3").click(
    function()
    {
        $("#listInput").val(inputList3);
        $("#labelSample").empty();
        $("#labelSample").append("Sample for rule 3");
    }
)

$('#listInput').click(function () {
    $("#labelSample").empty();
});