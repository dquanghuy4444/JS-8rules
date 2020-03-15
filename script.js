var upper=50;
var lower=-50;
var average=(upper+lower)/2;
$("#divResult").hide();
//createInfoArea(upper,lower,average);
let inputList1=[50,49,33,0,-5,-6,22,34,-45,-55,-44,-23,9,0,51,0,0,0,6,7];
$("#listInput").val(inputList1);
$("#upperInput").val(upper);
$("#lowerInput").val(lower);

function createInfoArea(upper,lower,average,htmlTitle,htmlDescription,htmlSolution)
{
  $(".info").empty();
  $("#title").empty();
  $("#description").empty();
  $("#solution").empty();
  var html="";
  html+=`<p>Giới hạn trên:  <span class="upper"></span></p>`;
  html+=`<p>Giới hạn dưới:  <span class="lower"></span></p>`;
  html+=`<p>Gía trị trung bình:  <span class="average"></span></p>`;
  $(".info").append(html);
  $("#description").append(htmlDescription);
$("#solution").append(htmlSolution);
  $(".upper").text(upper);
$(".lower").text(lower);
$(".average").text(average);
$("#title").append(htmlTitle);

}
function createSTT(inputList)
{
  var html="";
  html+=`<tr>`;
  html+=`<th>STT</th>`;
  $.each(inputList,function(i,value)
  {
    html+=`<td>${i+1}</td>`
  })
  html+=`</tr>`;
  return html;
}

function createInputList(inputList)
{
  var html="";
  html+=`<tr>`;
  html+=`<th>List input</th>`;
  $.each(inputList,function(i,value)
  {
    html+=`<td>${value}</td>`
  })
  html+=`</tr>`;
  return html;
}

function createOutputList(inputList)
{
  var html="";
  html+=`<tr>`;
  html+=`<th>List output</th>`;
  $.each(inputList,function(i,value)
  {
    html+=htmlTd.get(value);
    html+=value+`</td>`;
    // if(value===1)
    // {
    //   html+=`<td class="bg-warning">${value}</td>`
    // }
    // if(value===2)
    // {
    //   html+=`<td class="bg-danger">${value}</td>`
    // }
    // if(value===0)
    // {
    //   html+=`<td class="bg-primary">${value}</td>`
    // }
  })
  html+=`</tr>`;
  return html;
}
const htmlTd = new Map([
  [1,`<td class="bg-warning">`],
  [2,`<td class="bg-danger">`],
  [0,`<td class="bg-primary">`],
])
function createTableBody(id,inputList,outputList)
{
  $("#"+id).empty();
  $("#"+id).append(`<tbody>`);
  $("#"+id).append(createSTT(inputList));
  $("#"+id).append(createInputList(inputList));
  $("#"+id).append(createOutputList(outputList));
  $("#"+id).append(`</tbody>`);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Rule1
function rule1(inputList,upper,lower)
{
    var _inputList=[];
    _inputList=inputList.slice();
    $.each(_inputList, function(index, value) {
        // if(value>=upper||value<=lower)
        // {
        //     _inputList[index]=2;
        // }
        // else
        // _inputList[index]=0;
        _inputList[index]=(value>=upper||value<=lower)? 2:0
      });
    // for(let i=0;i<_inputList.length;i++)
    // {
    //     if(_inputList[i]>upper||_inputList[i]<lower)
    //     {
    //         _inputList[i]=2;
    //     }
    //     else
    //     _inputList[i]=0;
    // }
    return _inputList;
}





////////////////////////////////////////////////////////////////////////
var inputList2=[0,2,4,6,28,5,8,9,7,4,-44,-23,-9,-3,-12,-33,-9,-2,1,3];

const outputRule2 = new Map([
  [8, 1],
  [9, 2],
  ['default',0],
])

function rule2(inputList,upper,lower,average)
{
    var countMinus=0;
    var countPlus=0;
    var _inputList=[];
    _inputList=inputList.slice();

    $.each(_inputList, function(index, value) {
      if(value>average&&value<upper)
      {
        countMinus=0;
        countPlus++;
        // if(countPlus==8)
        // {
        //   _inputList[index]=1;
        // }
        // else if(countPlus==9)
        // {
        //   _inputList[index]=2;
        // }
        // else
        // {
        //   _inputList[index]=0;
        // }
       _inputList[index] = outputRule2.get(countPlus) || outputRule2.get('default');
      }
      else if(value>lower&&value<average)
      {
        countPlus=0;
        countMinus++;
        // if(countMinus==8)
        // {
        //   _inputList[index]=1;
        // }
        // else if(countMinus==9)
        // {
        //   _inputList[index]=2;
        // }
        // else
        // {
        //   _inputList[index]=0;
        // }
        _inputList[index] = outputRule2.get(countMinus) || outputRule2.get('default');

      }
      else if(value==average ||value>=upper||value<=lower)
      {
        countMinus=0;
        countPlus=0;
        _inputList[index]=0;
      }
    });

    return _inputList;
}

var outputList2=rule2(inputList2,upper,lower,average);

//createTableBody("table2",inputList2,outputList2);
//////////////////////////////////////////////////////////////////

const outputRule3 = new Map([
  [5, 1],
  [6, 2],
  ['default',0],
])
var inputList3=[49,46,33,21,20,15,8,6,7,8,-44,-23,-9,-3,-1,0,2,3,1,23];
//$("#list3").text(inputList3);

var rule3=function(inputList,upper,lower)
{
    var countIncrease=0;
    var countDecrease=0;
    var _inputList=inputList.slice();

    for(let i=0;i<_inputList.length;i++)
    {
        if(inputList[i]>inputList[i-1])
        {
          countDecrease=0;
          countIncrease++;
          // if(countIncrease==5)
          // {
          //   _inputList[i]=1
          // }
          // else if(countIncrease==6)
          // {
          //   _inputList[i]=2
          // }
          // else
          // {
          //   _inputList[i]=0 
          // }
          _inputList[i]=outputRule3.get(countIncrease)||outputRule3.get('default')
        }
        else if(inputList[i]<inputList[i-1])
        {
          countIncrease=0;
          countDecrease++;
          // if(countDecrease==5)
          // {
          //   _inputList[i]=1
          // }
          // else if(countDecrease==6)
          // {
          //   _inputList[i]=2
          // }
          // else
          // {
          //   _inputList[i]=0 
          // }
          _inputList[i]=outputRule3.get(countDecrease)||outputRule3.get('default')
        }
        else
        {
          countDecrease=0;
          countIncrease=0;
          _inputList[i]=0;
        }
    }

    return _inputList;
}

var outputList3=rule3(inputList3,upper,lower);

createTableBody("table3",inputList3,outputList3);


var inputListOK=[49,46,33,21,20,15,18,6,-7,8,-44,-23,-9,-3,-1,0,-2,3,1,23];


