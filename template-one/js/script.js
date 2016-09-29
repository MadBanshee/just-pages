window.onload = function() {
	document.getElementById('toggler').onclick = function () {
		openbox('nav', this);
		return false;
	};
};



function openbox(id, toggler) {
	var div = document.getElementById(id);
	if(div.style.display == 'block') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
}

$(document).ready(function (){
	$(window).resize(function(){
		var winBr = $(window).width();
		if(winBr < 768) {
			document.getElementById('nav').style.display = 'none';
		}
		else {
			document.getElementById('nav').style.display = 'block';
		};
	});     
});