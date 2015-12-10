var input = document.getElementsByTagName("pre")[0].innerText.split('\n');

for (var i = 0; i < input.length - 1; i++) {
	input[i] = (input[i]).split(' -> ');
};

var replaceVar = function(vari,value){

}

var varMap = { };
var assignReg = new RegExp(/^(\d*)\s->\s(.*)$/);

for (var i = 0; i < input.length - 1; i++) {
	var temp = (input[i]).match(assignReg);
	if(temp)//assignment
		replaceVar();
};