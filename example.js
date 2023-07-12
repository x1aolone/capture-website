import captureWebsite from './index.js';

// Run this file with `$ node example.js`

(async () => {
	await captureWebsite.file('https://www.zhlhzhu.com', 'example.pdf', {
		type: 'pdf'
	});
	await captureWebsite.file('https://www.zhlhzhu.com', 'example.png');
})();
