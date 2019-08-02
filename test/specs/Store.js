const assert = require('assert');
before(function(){
	browser.url('https://www.fifa.com/?nav=internal');
	browser.pause(3000);
                const shop = $('svg.fi-svg-icon.icon-basket');
	shop.click();
});
afterEach(function(){
	browser.switchWindow('FIFA - Find Your e-Store - FIFA.com');
	browser.pause();
});

describe('Store', () => {
	it('User can shop in France online store', () => {
   //        browser.url('https://www.fifa.com/?nav=internal');
     //      browser.pause(3000);
       //         const shop = $('svg.fi-svg-icon.icon-basket');
         //       shop.click();
                const forfranceclick = $('div.d3-o-article__body.fi-article__body').$$('.fi-o-article__body-part--button')[0].$('span.fi-o-article__button__title');
//	        forfranceclick.scrollIntoView();
		forfranceclick.click();
                browser.pause(3000);
		browser.switchWindow('Amazon.fr: FIFA');
		browser.pause(3000);
		const burl1 = browser.getUrl();
               	assert.strictEqual(burl1,'https://www.amazon.fr/stores/page/225BF558-B759-410E-A350-089539A0F218?ingress=3');
    });
       it('User can shop in USA online store', () => {
	   //     browser.url('https://www.fifa.com/?nav=internal');
        //	browser.pause(3000);
          //      const shop = $('svg.fi-svg-icon.icon-basket');
            //    shop.click();
             	const forUSAclick = $('div.d3-o-article__body.fi-article__body ').$$('.fi-o-article__body-part--button')[1].$('.fi-o-article__button__title');
//		forUSAclick.scrollIntoView();
                forUSAclick.click();
                browser.pause(3000);
		browser.switchWindow('Amazon.com: FIFA');
		browser.pause(3000);
                const burl1 = browser.getUrl();
                 assert.strictEqual(burl1,'https://www.amazon.com/fifa');
	      // forUSAclick.scrollIntoView();
	      //  browser.pause(9000);
    });
	it('User can shop in UK online store', () => {
		//browser.url('https://www.fifa.com/?nav=internal');
               // browser.pause(3000);
       	    //    const shop = $('svg.fi-svg-icon.icon-basket');
              //  shop.click();
             browser.pause(5000);
		const forUKclick = $('div.d3-o-article__body.fi-article__body ').$$('.fi-o-article__body-part--button')[2].$('.fi-o-article__button__title');
	//	forUKclick.scrollIntoView();
		const forUSAclick = $('div.d3-o-article__body.fi-article__body ').$$('.fi-o-article__body-part--button')[1].$('.fi-o-article__button__title');
               forUSAclick.scrollIntoView();
		browser.pause(3000);
		forUKclick.click();
                browser.pause(3000);
                browser.switchWindow('Amazon.co.uk: FIFA');
                browser.pause(3000);
		const burl1 = browser.getUrl();
                 assert.strictEqual(burl1,'https://www.amazon.co.uk/stores/page/BAA881CB-95D0-4399-8B38-5195001779A2?ingress=3');
    });
        it('User can shop in Germany online store', () => {
//         browser.url('https://www.fifa.com/?nav=internal');
  //         browser.pause(3000);
    //            const shop = $('svg.fi-svg-icon.icon-basket');
      //          shop.click();
              const forGermanyclick = $('div.d3-o-article__body.fi-article__body ').$$('.fi-o-article__body-part--button')[3].$('.fi-o-article__button__title');
//		forGermanyclick.scrollIntoView();
		forGermanyclick.click();
                browser.pause(3000);
                browser.switchWindow('Amazon.de: FIFA');
                browser.pause(3000);
                const burl1 = browser.getUrl();
                 assert.strictEqual(burl1,'https://www.amazon.de/stores/page/2E31EA16-E84F-4188-B1A3-BBDF80BC6B5F?ingress=3');
    });
        it('User can shop in Italy online store', () => {
        // browser.url('https://www.fifa.com/?nav=internal');
          // browser.pause(3000);
            //    const shop = $('svg.fi-svg-icon.icon-basket');
              //  shop.click();
              const forItalyclick = $('div.d3-o-article__body.fi-article__body ').$$('.fi-o-article__body-part--button')[4].$('.fi-o-article__button__title');
//		forItalyclick.scrollIntoView();
		forItalyclick.click();
                browser.pause(3000);
                browser.switchWindow('Amazon.it: FIFA');
                browser.pause(3000);
                const burl1 = browser.getUrl();
                 assert.strictEqual(burl1,'https://www.amazon.it/stores/page/F00E6A2B-64FD-4467-9F03-D225CD0AB45D?ingress=3');
    });
        it('User can shop in Spain online store', () => {
        // browser.url('https://www.fifa.com/?nav=internal');
          // browser.pause(3000);
            //    const shop = $('svg.fi-svg-icon.icon-basket');
              //  shop.click();
		 const forGermanyclick = $('div.d3-o-article__body.fi-article__body ').$$('.fi-o-article__body-part--button')[3].$('.fi-o-article__button__title');
              forGermanyclick.scrollIntoView();

              const forSpainclick = $('div.d3-o-article__body.fi-article__body ').$$('.fi-o-article__body-part--button')[5].$('.fi-o-article__button__title');
//		forSpainclick.scrollIntoView();
		forSpainclick.click();
                browser.pause(3000);
		browser.switchWindow('Amazon.es: FIFA')
		browser.pause(3000);
                const burl1 = browser.getUrl();
                 assert.strictEqual(burl1,'https://www.amazon.es/stores/page/998FA001-0FE7-4DA4-AD84-7A3159279FB9?ingress=3');
    });

});
