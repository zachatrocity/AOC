var input = document.getElementsByTagName("pre")[0].innerHTML.split('\n');

var initArray = function(){
	var arr = new Array(1000);

	for(var k = 0; k < arr.length; k++){
		arr[k] = new Array(y);
	};

	for(i=0;i<1000;i++){
	  for(j=0;j<1000;j++){
	    arr[i][j] = 0;
	  }
	}

	return arr;
}

var arr = initArray();

var toggleLights = function(x,y,toX,toY){
	for (var i = x; i <= toX; i++) {
		for(var k = y; k <= toY; k++){
			if(arr[i][k] == 0)
				arr[i][k] = 1;
			else 
				arr[i][k] = 0;
		};
	};
}

var turnOnLights = function(x,y,toX,toY){
	for (var i = x; i <= toX; i++) {
		for(var k = y; k <= toY; k++){
			arr[i][k] = 1;
		};
	};
}

var turnOffLights = function(x,y,toX,toY){
	for (var i = x; i <= toX; i++) {
		for(var k = y; k <= toY; k++){
			arr[i][k] = 0;
		};
	};
}

//part one
for (var i = 0; i < input.length - 1; i++) {
	var cmd = input[i].match(/(\d*),(\d*)/g);
	var x = parseInt(cmd[0].split(',')[0]);
	var y = parseInt(cmd[0].split(',')[1]);
	var tx = parseInt(cmd[1].split(',')[0]);
	var ty = parseInt(cmd[1].split(',')[1]);
	if(input[i].match(/on/))
		turnOnLights(x,y,tx,ty);
	else if(input[i].match(/off/))
		turnOffLights(x,y,tx,ty)
	else if(input[i].match(/toggle/))
		toggleLights(x,y,tx,ty)
};

arr.reduce(function(c,r){
	return c + r.filter(function(l){return l}).length
},0)

//part 2

var toggleLights = function(x,y,toX,toY){
	for (var i = x; i <= toX; i++) {
		for(var k = y; k <= toY; k++){
			arr[i][k] += 2;
		};
	};
}

var turnOnLights = function(x,y,toX,toY){
	for (var i = x; i <= toX; i++) {
		for(var k = y; k <= toY; k++){
			arr[i][k]++;
		};
	};
}

var turnOffLights = function(x,y,toX,toY){
	for (var i = x; i <= toX; i++) {
		for(var k = y; k <= toY; k++){
			if(arr[i][k] > 0) arr[i][k]--;
		};
	};
}

var arr = initArray();

for (var i = 0; i < input.length - 1; i++) {
	var cmd = input[i].match(/(\d*),(\d*)/g);
	var x = parseInt(cmd[0].split(',')[0]);
	var y = parseInt(cmd[0].split(',')[1]);
	var tx = parseInt(cmd[1].split(',')[0]);
	var ty = parseInt(cmd[1].split(',')[1]);
	if(input[i].match(/on/))
		turnOnLights(x,y,tx,ty);
	else if(input[i].match(/off/))
		turnOffLights(x,y,tx,ty)
	else if(input[i].match(/toggle/))
		toggleLights(x,y,tx,ty)
};

arr.reduce(function(c,r){
  return c + r.reduce(function(c,col){
    return c + col
  },0)
},0);