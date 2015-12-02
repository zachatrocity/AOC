//this was ran in the chrome console on the input page (http://adventofcode.com/day/2/input)

var input = document.getElementsByTagName("pre")[0].innerHTML.split('\n');

var calcPaper = function(dem){
	//lwh sub 0 is length, 1 width, 2, height
	var lwh = dem.split('x').sort( function(a,b) { return a - b; } ); 
	var l = lwh[0];
	var w = lwh[1];
	var h = lwh[2];
	return (2*l*w) + (2*w*h) + (2*h*l) + (l*w);	
}

var calcRibbon = function(dem){
	//lwh sub 0 is length, 1 width, 2, height
	var lwh = dem.split('x').sort( function(a,b) { return a - b; } ); 
	var l = Number(lwh[0]);
	var w = Number(lwh[1]);
	var h = Number(lwh[2]);
	debugger;
	return 2*(l+w) + (l*w*h);	
}

//part 1
var totalPaper = 0;
for(var i = 0; i < input.length; i++){
	if(input[i] != ""){
		totalPaper += calcPaper(input[i]);
	}
}
console.log(totalPaper);

//part 2
var totalRibbon = 0;
for(var i = 0; i < input.length; i++){
	if(input[i] != ""){
		totalRibbon += calcRibbon(input[i]);
	}
}
console.log(totalRibbon);