var input = document.getElementsByTagName("pre")[0].innerHTML.split('\n');

var String.prototype.containsAtLeastThreeVowels = function() {

}	

var String.prototype.containsDuplicateLetters = function(){

}

var String.prototype.doesNotContainCertainStrings = function(){ //ab, cd, pq, or xy

}

var result = 0;
for (var i = 0; i < input.length - 1; i++) {
	if(input[i].containsAtLeastThreeVowels() &&
		input[i].containsDuplicateLetters() &&
		input[i].doesNotContainCertainStrings()){
		result++;
	}
};

console.log(result);

