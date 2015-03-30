import {header} from './components/header/_header.js';
import {analytics} from './components/analytics/_analytics.js';
import {browserUpdate} from './components/browser-update/_browser-update.js';

document.addEventListener('DOMContentLoaded', () => {

	// INIT COMPONENT MODULES
	header.init();
	analytics.init();
	browserUpdate.init();

	// INIT LIB MODULES
	fitIt('[src*="youtube.com"]');
});
