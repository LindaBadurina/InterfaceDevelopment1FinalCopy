$(document).ready (function() {

var score = 0;

$(".orange").click (function() {
	score = score + 1;
	$(".score").html("Oranges Juiced = " + score);

	if (score == 3 ) {
		$(".jug").attr("src","img/jug2.png");
	}

	else if (score == 6 ) {
		$(".jug").attr("src","img/jug3.png");

	}

	else if (score == 9 ) {
		$(".jug").attr("src","img/jug4.png");

	}

	else if (score == 12 ) {
		$(".jug").attr("src","img/jug5.png");

	}

	else if (score == 15 ) {
		$(".jug").attr("src","img/jug6.png");

	}

	else if (score == 18 ) {
		$(".jug").attr("src","img/jug7.png");

	}

	else if (score == 21 ) {
		$(".jug").attr("src","img/jug8.png");

	}

	else if (score == 24 ) {
		$(".jug").attr("src","img/jug9.png");

	}

	else if (score == 27 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/strawberry.png");
		$(".score").html("Strawberries Juiced = " + score);

	}

	else if (score == 28 ) {
		$(".score").html("Strawberries Juiced = " + score);

	}
	
	else if (score == 30 ) {
		$(".jug").attr("src","img/strawjug2.png");

	}

	else if (score == 33 ) {
		$(".jug").attr("src","img/strawjug3.png");

	}

	else if (score == 36 ) {
		$(".jug").attr("src","img/strawjug4.png");

	}

	else if (score == 39 ) {
		$(".jug").attr("src","img/strawjug5.png");

	}

	else if (score == 42 ) {
		$(".jug").attr("src","img/strawjug6.png");

	}

	else if (score == 45 ) {
		$(".jug").attr("src","img/strawjug7.png");

	}

	else if (score == 48 ) {
		$(".jug").attr("src","img/strawjug8.png");

	}

	else if (score == 51 ) {
		$(".jug").attr("src","img/strawjug9.png");

	}




});

});


