const assert = require('assert');

beforeEach(function() {
         browser.url('https://www.fifa.com/?nav=internal');

});
describe('FIFA.com Registration',()=>{
        it('User can’t register with the user-entered incorrect email address',()=>{
//                browser.url('https://www.fifa.com/?nav=internal');
                const icon = $('li.fi-icons-bar__login');
                icon.click();
                const sign_up_now = $('[value = "Sign Up now"]');
                sign_up_now.click();
                browser.pause(8000);
                const register_by_email = $('button#create_button_link[tabindex="1"]');
                register_by_email.click();
		browser.pause(8000);
                const screen_name = $('input#screenName.textInput');
                screen_name.setValue('My_account11');
               const email = $('div input#email');
                email.setValue('ellamuradyan1999mail.ru');
                const password = $('#newPassword');
                password.setValue('cackagir1');
                const re_password = $('#reenterPassword');
                re_password.setValue('cackagir1');
                const country = $('div#country_selected_item_container span.dd_txt');
                country.click();
                $('ul.select-list.expanded').$$('li.clsAnchor')[11].click();
                const age = $('#dateOfBirth_age option');
                age.click();
                $('#dateOfBirth_age [value="20"]').click();
                $('div #step1Next').click();
                browser.pause(3000);
                const err_msg = $('div#fieldIncorrect.error.pageLevel').getText();
                assert.strictEqual(err_msg, 'One or more fields are filled out incorrectly. Please check your entries and try again.');

        });
        it('User can’t register with the user-entered incorrect password(entered password < 8)',()=>{
//                browser.url('https://www.fifa.com/?nav=internal');
                const icon = $('li.fi-icons-bar__login');
                icon.click();
                const sign_up_now = $('[value = "Sign Up now"]');
                sign_up_now.click();
                browser.pause(10000);
                const register_by_email = $('button#create_button_link[tabindex="1"]');
                register_by_email.click();
                browser.pause(10000);
                const screen_name = $('input#screenName.textInput');
                screen_name.setValue('My_account11');
               const email = $('div input#email');
                email.setValue('ellamuradyan1999@mail.ru');
                const password = $('#newPassword');
                password.setValue('cack1');
                const re_password = $('#reenterPassword');
                re_password.setValue('cack1');
                const country = $('div#country_selected_item_container span.dd_txt');
                country.click();
                $('ul.select-list.expanded').$$('li.clsAnchor')[11].click();
                const age = $('#dateOfBirth_age option');
                age.click();
                $('#dateOfBirth_age [value="20"]').click();
                $('div #step1Next').click();

                browser.pause(3000);
                const err_msg = $('div#fieldIncorrect.error.pageLevel').getText();
                assert.strictEqual(err_msg, 'One or more fields are filled out incorrectly. Please check your entries and try again.');
	});
	        it('User can’t register with the user-entered incorrect password(entered password > 16)',()=>{
//                browser.url('https://www.fifa.com/?nav=internal');
                const icon = $('li.fi-icons-bar__login');
                icon.click();
                const sign_up_now = $('[value = "Sign Up now"]');
                sign_up_now.click();
                browser.pause(10000);
                const register_by_email = $('button#create_button_link[tabindex="1"]');
                register_by_email.click();
                browser.pause(10000);
                const screen_name = $('input#screenName.textInput');
                screen_name.setValue('My_account11');
               const email = $('div input#email');
                email.setValue('ellamuradyan1999@mail.ru');
                const password = $('#newPassword');
                password.setValue('shaterkarcackagir1');
                const re_password = $('#reenterPassword');
                re_password.setValue('shaterkarcackagir1');
                const country = $('div#country_selected_item_container span.dd_txt');
                country.click();
                $('ul.select-list.expanded').$$('li.clsAnchor')[11].click();
                const age = $('#dateOfBirth_age option');
                age.click();
                $('#dateOfBirth_age [value="20"]').click();
                $('div #step1Next').click();

                browser.pause(3000);
                const err_msg = $('div#fieldIncorrect.error.pageLevel').getText();
                assert.strictEqual(err_msg, 'One or more fields are filled out incorrectly. Please check your entries and try again.');
        });

});
