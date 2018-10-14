
var loginPage = require('../../pageobjects/login.page'),
    workflowPage = require('../../pageobjects/workflow.page');



describe('Tray.io login, create and delete a workflow and logout', function () {

    it('should allow access with correct creds', function () {
        loginPage.open();
        loginPage.login(loginPage.email, loginPage.pwd);
        loginPage.dashboardFixedHeader.waitForVisible();
        
        expect(loginPage.dashboardFixedHeader.getText()).to.be.equal('Dashboard');
    });

    it('should be able add unique workflow when create new workflow button is clicked', function () {
        workflowPage.addWorkflow('Demo');
        browser.pause(3000);
        workflowPage.open('/');
        workflowPage.workflowTitle.waitForVisible(5000);

        expect(workflowPage.workflowTitle.getText()).to.be.equal('Demo');
    });

    it('should be able delete workflow when delete button is clicked', function () {
        workflowPage.deleteWorkflow();
        workflowPage.warningWorkflowMessage.waitForVisible();
        expect(workflowPage.warningWorkflowMessage.getText()).to.be.equal("YOU DON'T HAVE ANY WORKFLOWS");
    });

    it('should logout when logout link is clicked', function () {
        loginPage.logout();

        expect(browser.getUrl()).to.be.equal('https://app.tray.io/login');
    });

});
