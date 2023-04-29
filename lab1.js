//Prajwal Rana
//submission date: 10/13/2020

1.	var inputtable = [1,2,3,4,5,6,7,8,9,10];

2.	a.  var inputtable = [1,2,3,4,5,6,7,8,9,10];

var fiveTable = inputtable.map(n=>n*5);
	 console.log(fiveTable);

	output:
[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]


 b. var inputtable = [1,2,3,4,5,6,7,8,9,10];

var thirteenTable = inputtable.map(n=>n*13);

	console.log(thirteenTable);

output:
[13, 26, 39, 52, 65, 78, 91, 104, 117, 130]


c. var inputtable = [1,2,3,4,5,6,7,8,9,10];

    var squaresTable = inputtable.map(n=>n*n);

    console.log(squaresTable);

output:
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]




3.	 var inputtable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var val=inputtable.map(n=>n*5).filter(p=>(p%2!=0 && p%5==0));


console.log(val);

output:
[5, 15, 25, 35, 45, 55, 65, 75, 85, 95]


4.	var inputtable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


var val=inputtable.map(n=>n*7).filter(p=>(p%2==0 && p%7==0));
var red = val.reduce((x,y)=>x+y);
console.log(red);

output:
392


5.
let cylinder_volume = r => h=>{
    var volume =0;
    volume = 3.14*r*r*h;
    return volume;
   }

console.log(cylinder_volume(5)(10));

output:
785


6.	makeTag = function(beginTag, endTag){
return function(textcontent){
    return beginTag +textcontent +endTag;
}
       }

var td=makeTag("<td>","</td>\n");
var tr=makeTag("<tr>\n","</tr>\n");
      var th=makeTag("\n<th>","</th>\n");
var tab=makeTag("<table>\n","</table>");


console.log(tab(tr(td("hello")+td("world")+td("how are you"))+tr(td("Name")+td("age")+td("24"))));


output:
<table>
<tr>
<td>hello</td>
<td>world</td>
<td>how are you</td>
</tr>
<tr>
<td>Name</td>
<td>age</td>
<td>24</td>
</tr>
</table>
