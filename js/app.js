//Fizz Buzz

$(document).ready(function(){
$('#add-btn').click(function(){

var realNumber = parseInt($('#numerical').val())
console.log('realNumber',realNumber);
	for (var num = 1; num <= realNumber; num++){
		console.log(num);
	//check if # can be evenly diveded by 3
	if (((num % 3)+(num % 5))===0) {
		console.log(num);
		$('div ul').append('<li>fizz buzz</li>');
	}
	else if (num % 5 ===0) {
		console.log('num');
		$('div ul').append('<li>buzz</li>');
	}
	else if (num % 3 ===0){
		//print to page if yes
		console.log('num');
		$('div ul').append('<li>fizz</li>');
	}
	else {
		$('div ul').append('<li>'+num+'</li>');
	}
}
});
});
//console.log everything
//$('.result').prepend(realNumber);
	/*var message = window.prompt('Please input a number between 1 an 100.');
	var value = +'message';


$(document).ready(function(){
	//count from 1 to 100
	for (var num = 1; num <= 100; num++){
		//console.log(num);
	//check if # can be evenly diveded by 3
	if (((num % 3)+(num % 5))===0) {
		$('div ul').append('<li>fizz buzz</li>');
	}
	else if (num % 5 ===0) {
		console.log('buzz');
		$('div ul').append('<li>buzz</li>');
	}
	else if (num % 3 ===0){
		//print to page if yes
		console.log('fizz');
		$('div ul').append('<li>fizz</li>');
	}
	else {
		$('div ul').append('<li>'+num+'</li>');
	}
}
});



	//$('div').append(num);
	//check if # can be evenly divided by 5

	//print to page if yes

//how do i keep track of which variable I'm on
//check each number it's  more than 0 when % 3 or %5

/*$(document).ready(function message (){
	//count from 1 to 100
	var num = 1;
	do {
		$('div').append('<p>'document.write('num')'</p>')
		num++;
	} while (num <= 100)
});*/