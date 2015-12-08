var input = document.getElementsByTagName("pre")[0].innerHTML.split('\n');

var arr = [1000][1000];

var toggleLights = function(on,x,y,toX,toY){

}

for (var i = 0; i < input.length - 1; i++) {
	var cmd = input[i].match(/(\d*),(\d*)/g);
	var x = cmd[0], y = cmd[1], tx = cmd[2], ty = cmd[3];
	toggleLights((input[i].match || []).length ,x,y,tx,ty);
};