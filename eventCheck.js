var _upper;
var _lower;
var _average;
var _inputListTemp;
var _inputList;
var _outputList;
function getValueInTextBox()
{
    _upper=parseInt($("#upperInput").val());
    _lower=parseInt($("#lowerInput").val());
    _average=(_upper+_lower)/2;
    _inputListTemp=$("#listInput").val();
    _inputList = Array.from(_inputListTemp.split(','),Number);
}
///////////////////////////////////////////////////
$("#btnRule1").click(
    function()
{
    // var _upper=parseInt($("#upperInput").val());
    // var _lower=parseInt($("#lowerInput").val());
    // var _average=(_upper+_lower)/2;
    // var _inputListTemp=$("#listInput").val();
    // var _inputList = Array.from(_inputListTemp.split(','),Number);
    getValueInTextBox();
    _outputList=rule1(_inputList,_upper,_lower);
    funcRule1();
})

function funcRule1()
{
    var htmlTitle="Rule 1";
var htmlDescription=`Rule 1:Giá trị trong list nằm ngoài khoảng (<span class="lower"></span>,<span class="upper"></span>)`;
var htmlSolution=`Cách làm:Check từng phần tử , giá trị lớn hơn hoặc bằng giới hạn hoặc ,giá trị bé hơn hoặc bằng giới hạn dưới thì cho bằng 0`;
    createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
  createTableBody("table",_inputList,_outputList);
  $("#divResult").show();
  $("#labelWarning").empty();
}
/////////////////////////////////////////////////
$("#btnRule2").click(
    function()
{
    getValueInTextBox();
  _outputList=rule2(_inputList,_upper,_lower,_average);
  funcRule2();
})

function funcRule2()
{
    var htmlTitle="Rule 2";
    var htmlDescription=`Rule 2:Có 9 giá trị hoặc nhiều hơn liên tiếp nhau nằm cùng  khoảng từ (<span class="average"></span>,<span class="upper"></span>) hoặc (<span class="lower"></span>,<span class="average"></span>)`;
    var htmlSolution=`Cách làm:Tạo 2 count âm và dương.nếu giá trị  trong khoảng từ lower->average, count âm tăng 1 đơn vị .Giá trị tiếp theo nằm trong khoảng average->upper,count âm=0,count dương tăng 1 đơn vị.Ngược lại cũng như thế.Nêu count nào có giá trị =8,giá trị trong list trả về bằng 1, count =9,giá trị bằng 2, count giá trị khác thì giá trị trong list=0.Trường hợp giá trị =0,count âm và dương đều =0. `;
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").show();
        $("#labelWarning").empty();
}


///////////////////////////////
$("#btnRule3").click(
    function huy()
{
    getValueInTextBox();
  _outputList=rule3(_inputList,_upper,_lower);
  funcRule3();
})

function funcRule3()
{
    var htmlTitle="Rule 3";
    var htmlDescription=`Rule 3: Có 6 giá trị hoặc nhiều hơn liên tiếp nhau đang có xu hướng tăng hoặc giảm`;
    var htmlSolution=`Cách làm:Lấy giá trị hiện tại và giá trị tiếp theo so sánh với nhau.Nếu bé hơn thì biến countIncrease tăng.Cứ so sánh từng cặp như thế. Nếu 1 cặp ngược xu hướng tăng lên thì biến countIncrease=0, biếng countDerease tăng.Ngược lại cũng như thế `;
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").show();
        $("#labelWarning").empty();
}
//////////////////////////////

$("#btnAllRule").click(
    function()
{
    getValueInTextBox();
    var flag=0;

    _outputList=rule1(_inputList,_upper,_lower);
    $.each(_outputList, function(index, value) {
    if(value==2)
    {
        flag=1;
        return false;
    }
    });
    if(flag==1)
    {
        funcRule1();
        $("#labelWarning").text("NG tại rule 1");
    }


    _outputList=rule2(_inputList,_upper,_lower,_average);
    $.each(_outputList, function(index, value) {
        if(value==2)
        {
            flag=2;
            return false;
        }
        });
        if(flag==2)
        {
            funcRule2();
            $("#labelWarning").text("NG tại rule 2");
        }

        _outputList=rule3(_inputList,_upper,_lower);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=3;
                return false;
            }
            });
            if(flag==3)
            {
                funcRule3();
                $("#labelWarning").text("NG tại rule 3");
            }
            if(flag==0)
            {
                $("#labelWarning").text("ok");
                $("#divResult").hide();
            }
})







