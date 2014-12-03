$(document).ready(function(){

	$(function() {
    	$( "#slider-range-max" ).slider({
    		range: "max",
    		min: 1,
    		max: 100,
    		value: 10,
    		slide: function(event, ui) {
    			$("#number-limit").text(ui.value);
    			numberLimit = ui.value;
    			// newQuestion = makeNewQuestion();
    		}
    	});
    	$("#number-limit").text($("#slider-range-max").slider('value'));
	 });

	function getRandomint(min, max) {
		return Math.floor(Math.random() = (max - min + max))
	}


	var createQandA = function(){
		var num1 = (Math.random() * 100).toFixed(0);
		var num2 = (Math.random() * 100).toFixed(0)
		var equ = num1 + ' + ' + num2;
		var answer = eval(equ);
		var qAndA = {
			question: equ,
			answer: answer
		};
		console.log(qAndA);
		console.log("here is the question: ", qAndA.question);
		console.log("here is the answer: ", qAndA.answer);
		return qAndA;
	};

	var showEqu = function(qAndA){
		$('.equ').text(qAndA.question)
	};

	// var rtAns = function(){
	// 	if (right ans) {
	// 		generate new equ
	// 	} elas {
	// 		stay in
	// 	}
	// };



	$('.equ').click(function(){
		showEqu( createQandA() );
		//defining
		// var equ = function(num) {
		// 	var sQ = Math.sqrt(num);
		// 	return sQ;
		// };
		// //running
		// var randomNumber = equ(Math.random());
		// alert(randomNumber);

	}); 


	$('.timer').click(function(){
		console.log("clicked!");
		var timeLeft = 10;
		var timer;
		var startTimer = function(){
			timer = setInterval(function(){
				console.log(timeLeft);
				$('#countdown').text(timeLeft);
				if(timeLeft === 0){
					clearInterval(timer)
				};
				timeLeft--;
			}, 1000);
			console.log(timer);
		};

		startTimer();

		// if(timeLeft === 0){
		// 	clearInterval(timer)
		// };
		// var endTime = function(){
		// var endTime = clearInterval(timer)
		// 	timerLeft = 0;
		// }
	});
	
	$('.button').click(function(){
		var answer = $('.ans').val();
		alert(answer);
	});

	// setTimeOut(function(){
	// 	alert('ok');
	// }, 2000)


// var ans = function(num) {
// 	var sQ = Math.sqrt(num);
// 	return sQ;
// }

// num()

// */
});
