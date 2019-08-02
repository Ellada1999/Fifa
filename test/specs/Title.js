const assert = require('assert');

describe('FIFA.com Title', () => {
	it('should have the right title', () => {
       		browser.url('https://www.fifa.com/?nav=internal');
	        const title = browser.getTitle();
	        assert.strictEqual(title, 'FIFA - FIFA.com');
   	 });
});


