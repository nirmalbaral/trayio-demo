// login.spec.js
import { expect } from 'chai';
import LoginPage from '../pageobjects/login.page';

describe('login form', () => {

    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('nirmal.baral@gmail.com');
        LoginPage.password.setValue('jL47zj4ZTHXQgtb');
        LoginPage.submit();

        expect(LoginPage.createFlowBtn.getText()).to.contain('Create new workflow');
    });

    it('should logout from the dashboard', () => {
        LoginPage.userAvatar.click();
        LoginPage.logoutBtn.click();
        expect(browser.getUrl()).to.be.equal('https://app.tray.io/login');
    });
});