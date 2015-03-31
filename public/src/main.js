import {header} from './components/header/_header.js';

document.addEventListener('DOMContentLoaded', () => {

	// INIT COMPONENT MODULES
	header.init();

	// INIT LIB MODULES
	fitIt('[src*="youtube.com"]');
});
