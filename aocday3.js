var input = document.getElementsByTagName("pre")[0].innerText;

//santa visits first house
var block = {}; block[[0,0]] = 1;
var santa = {x: 0, y:0} //x, y

var calcHouses = function(dir, person){
    if(dir == '^' && !([person.x, ++person.y] in block))
    	block[[person.x, person.y]] = 1;
    else if(dir == '>' && !([++person.x, person.y] in block))
    	block[[person.x, person.y]] = 1;
    else if(dir == 'v' && !([person.x, --person.y] in block))
    	block[[person.x, person.y]] = 1;
    else if (dir == '<' && !([--person.x, person.y] in block))
    	block[[person.x, person.y]] = 1;
}

//part 1
for (var i = 0; i < input.length; i++) {
	calcHouses(input[i], santa);
};
console.log(Object.keys(block).length);

//part 2
var block = {}; block[[0,0]] = 1;
var santa = {x: 0, y:0} //x, y
var robo = {x: 0, y:0} //x, y

for (var i = 0; i < input.length; i++) {
	calcHouses(input[i], (i%2 == 0) ? santa : robo);
};

console.log(Object.keys(block).length);





