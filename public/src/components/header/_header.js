export var header = {};

header.getNodes = () => {
	header.nav = document.querySelector('.header__nav');
	header.overlay = document.querySelector('.header__overlay');
	header.hamburger = document.querySelector('.header__hamburger');
	header.navToggleNode = document.querySelector('.header__nav-toggle');
};

header.setupListeners = () => {
	header.navToggleNode.addEventListener('click', header.toggleNav);
	header.overlay.addEventListener('click', header.toggleNav);
};

header.toggleNav = () => {
	header.nav.classList.toggle('header__nav--active');
	header.overlay.classList.toggle('header__overlay--active');
	header.hamburger.classList.toggle('header__hamburger--active');
};

header.init = () => {
	header.getNodes();
	header.setupListeners();
};
