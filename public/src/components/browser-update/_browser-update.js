export var browserUpdate = {};

browserUpdate.init = () => {

	/* jshint ignore:start */
	// Code from https://browser-update.org
	// Only changes were 1) window.$buoop instead of var $buoop to allow the expected global dependency inside a function and 2) removing semi-colon error
	window.$buoop = {c:2};
	function $buo_f(){
		var e = document.createElement("script");
		e.src = "//browser-update.org/update.js";
		document.body.appendChild(e);
	}
	try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
	catch(e){window.attachEvent("onload", $buo_f)}
	/* jshint ignore:end */
};
