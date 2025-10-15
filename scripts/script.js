// Typewriter effect for tagline
document.addEventListener('DOMContentLoaded', function() {
	var typewriter = new Typewriter(document.getElementById('typewriter'), {
		loop: false,
		delay: 75,
		cursor: '|',
	});
	typewriter
		.typeString('I build cool things with code </>')
		.start();
});
