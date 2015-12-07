var input = document.getElementsByTagName("pre")[0].innerHTML.split('\n');

//part 1
var vowels = function(str) {
	return ((str.match(/([aeiou])/g) || []).length > 2)
}	
var dupl = function(str){
	return ((str.match(/(\w)\1+/g) || []).length > 0)
}
var noSubs = function(str){ //ab, cd, pq, or xy
	return ((str.match(/^((?!ab|cd|pq|xy).)*$/g) || []).length == 1)
}

//part 2
var letBetween = function(str) {
	return ((str.match(/(\w).\1/g) || []).length > 0)
}	

var duplPair = function(str){
	return ((str.match(/(\w\w).*\1/g) || []).length > 0)
}

var result = 0;
var resultTwo = 0;
for (var i = 0; i < input.length - 1; i++) {
	if(vowels(input[i]) && dupl(input[i]) && noSubs(input[i])){
		result++;
	}

	if(letBetween(input[i]) && duplPair(input[i])){
		resultTwo++;
	}
};

console.log(result);
console.log(resultTwo);