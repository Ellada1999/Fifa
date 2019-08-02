const assert = require('assert');

describe('Language', () => {
        it('User can change language to “English”', () => {
           browser.url('https://www.fifa.com/?nav=internal');
    	   browser.setWindowSize(1248, 1053);
           browser.pause(3000);
	   const language = $('.fi-icons-bar__lang a');
           language.click();
	   const eng = $('ul.nav [data-value="en-GB"]');
	   eng.click();
           browser.pause(3000);
       	   const burl = browser.getUrl();
           assert.strictEqual(burl,'https://www.fifa.com/?nav=internal');
	   });
	it('User can change language to “Deutsch”', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $('.fi-icons-bar__lang a');
           language.click();
           const deu = $('ul.nav [data-value="de-DE"]');
           deu.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://de.fifa.com/?nav=internal');
           });
	it('User can change language to “Français”', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $('.fi-icons-bar__lang a');
           language.click();
           const franc = $('ul.nav [data-value="fr-FR"]');
           franc.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://fr.fifa.com/?nav=internal');
           });
	it('User can change language to “Español”', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $('.fi-icons-bar__lang a');
           language.click();
           const espon = $('ul.nav [data-value="es-ES"]');
           espon.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://es.fifa.com/?nav=internal');
           });
        it('User can change language to “简体中文”', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $('.fi-icons-bar__lang a');
           language.click();
           const chin = $('ul.nav [data-value="ch-CH"]');
           chin.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://fifaofficial.cn/my-world-cup');
           });
	  it('User can change language to ”English” from footer', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $$('.dropdown-toggle')[1];
           language.scrollIntoView();
	   browser.pause(5000);
           language.click();
           const eng = $('.dropdown-menu li[data-value="en-GB"]');
           eng.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://www.fifa.com/?nav=internal');
           });
	it('User can change language to “Deutsch” from footer', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $$('.dropdown-toggle')[1];
           language.scrollIntoView();
           browser.pause(5000);
           language.click();
           const deu = $('.dropdown-menu li[data-value="de-DE"]');
           deu.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://de.fifa.com/?nav=internal');
           });
	 it('User can change language to “Français” from footer', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $$('.dropdown-toggle')[1];
           language.scrollIntoView();
           browser.pause(5000);
           language.click();
           const franc = $('.dropdown-menu li[data-value="fr-FR"]');
           franc.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://fr.fifa.com/?nav=internal');
           });
	it('User can change language to “Español” from footer', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $$('.dropdown-toggle')[1];
	   language.scrollIntoView();
           browser.pause(5000);
           language.click();
           const espon = $('.dropdown-menu li[data-value="es-ES"]');
           espon.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://es.fifa.com/?nav=internal');
           });
	it('User can change language to “简体中文” from footer', () => {
           browser.url('https://www.fifa.com/?nav=internal');
           browser.pause(3000);
           const language = $$('.dropdown-toggle')[1];
	   language.scrollIntoView();
           browser.pause(5000);
           language.click();
           const chin = $('.dropdown-menu li[data-value="ch-CH"]');
           chin.click();
           browser.pause(3000);
           const burl = browser.getUrl();
           assert.strictEqual(burl,'https://fifaofficial.cn/my-world-cup');
           });
});
