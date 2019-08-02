const assert = require('assert');

describe('Logo', () => {
        it('User can appear on the home page after clicking on the logo which is on the what we are page', () => {
           browser.url('https://www.fifa.com/?nav=internal');
		browser.setWindowSize(1248, 1053);
	   browser.pause(3000);
	   	const burl1 = browser.getUrl();
	    browser.pause(3000);
                const whatweare = $('ul.fi-main-menu').$$('li')[0].$('a');
                whatweare.click();   	
		const logo = $('.fi-site-brand__logo');
	    	logo.click();
	   	browser.pause(3000);
	    	const burl2 = browser.getUrl();
                 assert.strictEqual(burl2,burl1);
    });
	 it('User can appear on the home page after clicking on the logo which is on the what we do page', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
                const burl1 = browser.getUrl();
           browser.pause(3000);
                const whatwedo = $('ul.fi-main-menu').$$('li')[1].$('a');
                whatwedo.click();
                const logo = $('.fi-site-brand__logo');
                logo.click();
                browser.pause(3000);
                const burl2 = browser.getUrl();
                 assert.strictEqual(burl2,burl1);
    });
	 it('User can appear on the home page after clicking on the logo which is on the fifa for ward page', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
                const burl1 = browser.getUrl();
           browser.pause(3000);
                const fifaforward = $('ul.fi-main-menu').$$('li')[2].$('a');
                fifaforward.click();
		 browser.pause(10000);
                const logo = $('.fi-site-brand__logo');
                logo.click();
                browser.pause(3000);
                const burl2 = browser.getUrl();
                 assert.strictEqual(burl2,burl1);
    });
	 it('User can appear on the home page after clicking on the logo which is on the fifa world cup  page', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
                const burl1 = browser.getUrl();
           browser.pause(3000);
                const fifaworldcup = $('ul.fi-main-menu').$$('li')[3].$('a');
                fifaworldcup.click();
                const logo = $('.fi-site-brand__logo');
                logo.click();
                browser.pause(3000);
                const burl2 = browser.getUrl();
                 assert.strictEqual(burl2,burl1);
    });
	 it('User can appear on the home page after clicking on the logo which is on the  fifa womens world cup page', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
                const burl1 = browser.getUrl();
           browser.pause(3000);
                const fifawomensworldcup = $('ul.fi-main-menu').$$('li')[4].$('a');
                fifawomensworldcup.click();
                const logo = $('.fi-site-brand__logo');
                logo.click();
                browser.pause(3000);
                const burl2 = browser.getUrl();
                 assert.strictEqual(burl2,burl1);
    });
	 it('User can appear on the home page after clicking on the logo which is on the worl dranking page', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
                const burl1 = browser.getUrl();
           browser.pause(3000);
                const worldranking = $('ul.fi-main-menu').$$('li')[5].$('a');
                worldranking.click();
                const logo = $('.fi-site-brand__logo');
                logo.click();
                browser.pause(3000);
                const burl2 = browser.getUrl();
                 assert.strictEqual(burl2,burl1);
    });
	 it('User can appear on the home page after clicking on the logo which is on the shop page', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
                const burl1 = browser.getUrl();
           browser.pause(3000);
                const shop = $('svg.fi-svg-icon.icon-basket');
                shop.click();
                const logo = $('.fi-site-brand__logo');
                logo.click();
                browser.pause(3000);
                const burl2 = browser.getUrl();
                 assert.strictEqual(burl2,burl1);
    });

});
