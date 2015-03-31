import {header} from './components/header/_header.js';
// import {analytics} from './components/analytics/_analytics.js';

document.addEventListener('DOMContentLoaded', () => {

	// INIT COMPONENT MODULES
	header.init();
	// analytics.init();

	// INIT LIB MODULES
	fitIt('[src*="youtube.com"]');
});
