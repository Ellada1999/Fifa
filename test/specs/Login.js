const assert = require('assert');

describe('Login', () => {
    it('User is able to login with valid credentials', () => {
       		browser.url('https://www.fifa.com/?nav=internal');
	const icon = $('.fi-icons-bar__login');
       		icon.click();
	const login = $('div.fi-login__submit-wrap input.btn.btn-primary.fi-btn--submit');
		login.click();
	    browser.pause(8000);
	const url1 = browser.getUrl();
	const email = $('#signInName');
		email.setValue('vpi608b@mail.ru');
	const pass = $('#password');
	    	pass.setValue('politexnik608b');
	const signin = $('button#next');
	    	signin.click();
	const url2 = browser.getUrl();

		 assert.strictEqual(url1,url2);
    });
   it('User isn’t able to login without password', () => {
                browser.url('https://www.fifa.com/?nav=internal');
        const icon = $('.fi-icons-bar__login');
                icon.click();
        const login = $('div.fi-login__submit-wrap input.btn.btn-primary.fi-btn--submit');
                login.click();
            browser.pause(8000);
        const email = $('#signInName');
                email.setValue('vpi608b@mail.ru');
	  //  const pass = $('#password');
          //      pass.setValue('politexnik608b');
        const signin = $('button#next');
                signin.click();
	const err = $$('div.entry-item')[1].$('p').getText();
               assert.strictEqual(err,'Please enter your password');
    });
   it('User isn’t able to login without email', () => {
                browser.url('https://www.fifa.com/?nav=internal');
        const icon = $('.fi-icons-bar__login');
                icon.click();
        const login = $('div.fi-login__submit-wrap input.btn.btn-primary.fi-btn--submit');
                login.click();
            browser.pause(8000);
       // const email = $('#signInName');
         //       email.setValue('vpi608b@mail.ru');
        const pass = $('#password');
                pass.setValue('politexnik608b');
        const signin = $('button#next');
                signin.click();
        const err = $$('div.entry-item')[0].$('p').getText();
                 assert.strictEqual(err,'Please enter your email');
    });
   it('User isn’t able to login with invalid email', () => {
                browser.url('https://www.fifa.com/?nav=internal');
        const icon = $('.fi-icons-bar__login');
                icon.click();
        const login = $('div.fi-login__submit-wrap input.btn.btn-primary.fi-btn--submit');
                login.click();
            browser.pause(8000);
        const email = $('#signInName');
                email.setValue('vpi608bma.ru');
        const pass = $('#password');
                pass.setValue('politexnik608b');
        const signin = $('button#next');
                signin.click();
        const err = $('div.error.itemLevel p').getText();
               assert.strictEqual(err,'Please enter a valid email address');
    });
   it('User isn’t able to login with invalid password', () => {
                browser.url('https://www.fifa.com/?nav=internal');
        const icon = $('.fi-icons-bar__login');
                icon.click();
        const login = $('div.fi-login__submit-wrap input.btn.btn-primary.fi-btn--submit');
                login.click();
            browser.pause(8000);
        const email = $('#signInName');
                email.setValue('vpi608b@mail.ru');
        const pass = $('#password');
                pass.setValue('politexnik608t');
        const signin = $('button#next');
                signin.click();
	     browser.pause(8000);
        const err = $('div.error.pageLevel p').getText();
               assert.strictEqual(err,'Your password is incorrect.');
    });
   it('User isn’t able to login with non-existent email',() => {
   	 browser.url('https://www.fifa.com/?nav=internal');
        const icon = $('.fi-icons-bar__login');
                icon.click();
        const login = $('div.fi-login__submit-wrap input.btn.btn-primary.fi-btn--submit');
                login.click();
            browser.pause(8000);
        const email = $('#signInName');
                email.setValue('vpi608@mail.ru');
        const pass = $('#password');
                pass.setValue('politexnik608b');
        const signin = $('button#next');
                signin.click();
	     browser.pause(8000);
        const err = $('div.error.pageLevel p').getText();
               assert.strictEqual(err,'We can\'t seem to find your account.');

   });
});
