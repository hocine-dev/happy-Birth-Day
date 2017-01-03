// Click "Congratulations!" to play animation

document.getElementById("usr").onfocus = function() {document.getElementById("usr").placeholder = ""};

document.getElementById('sbm').onclick = function (){
	var user = document.getElementById('usr').value;

	if ( user == "hocine_dev"){
	document.getElementById('inp').remove();
	document.getElementById('h1u').innerHTML = `${"Laeticia" || 'user'} !`
	document.getElementById('cgr').style.display='block';
	document.getElementById('aud').play();
	if(document.getElementById('info')){document.getElementById('info').style.display='none';}
	
}
	else{
		document.getElementById('info').style.display='block'
	}
}


$(function() {
	
	var numberOfStars = 30;
	for (var i = 0; i < numberOfStars; i++) {
	  $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
	}	
	animateText();
	animateBlobs();
});
 
$('.congrats').click(function() {
	reset();
	animateText();
	animateBlobs();
});
 
function reset() {
	$.each($('.blob'), function(i) {
		TweenMax.set($(this), { x: 0, y: 0, opacity: 1 });
	});
	TweenMax.set($('h1'), { scale: 1, opacity: 1, rotation: 0 });
}
function animateText() {
		TweenMax.from($('.congrats h1'), 0.8, {
		scale: 0.4,
		opacity: 0,
		rotation: 15,
		ease: Back.easeOut.config(4),
	});
}
function animateBlobs() {
	
	var xSeed = _.random(350, 380);
	var ySeed = _.random(120, 170);
	$.each($('.blob'), function(i) {
		var $blob = $(this);
		var speed = _.random(1, 5);
		var rotation = _.random(5, 100);
		var scale = _.random(0.8, 1.5);
		var x = _.random(-xSeed, xSeed);
		var y = _.random(-ySeed, ySeed);
 
		TweenMax.to($blob, speed, {
			x: x,
			y: y,
			ease: Power1.easeOut,
			opacity: 0,
			rotation: rotation,
			scale: scale,
			onStartParams: [$blob],
			onStart: function($element) {
				$element.css('display', 'block');
			},
			onCompleteParams: [$blob],
			onComplete: function($element) {
				$element.css('display', 'none');
			}
		});
	});
}




setInterval(function() {document.querySelector('.congrats').click()},4000)
setInterval(function() {document.querySelector('.orange').click()},2000)




