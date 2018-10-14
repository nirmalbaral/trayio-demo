var pageElement = require("../helpers/pageElement"),
    Page = require("./page");

var workflowPage = Object.create(Page, {
    createLink:     pageElement.pageElement("a[href='/create']"),
    workflowName:   pageElement.pageElement("input[name=name]"),
    createButton:   pageElement.pageElement("div[title=Create]"),
    workflowTitle:  pageElement.pageElement(".Title___tbmihn"),
    actionButton:   pageElement.pageElement(".Menu___-LZVQO"),
    deleteButton:   pageElement.pageElement(".delete-button"),
    confirmDeleteButton:    pageElement.pageElement("div[title=Yes]"),
    warningWorkflowMessage: pageElement.pageElement(".no-worflow-warning___2U7GsA > h2"),

    addWorkflow: {
        value: function(workflow) {
            this.workflowName = workflow;
            this.createLink.click();
            this.workflowName.setValue(workflow);
            this.createButton.click();
        },
    },

    deleteWorkflow: {
        value: function() {
            browser.scroll(0, 250);
            this.actionButton.click();
            this.deleteButton.waitForVisible();
            this.deleteButton.click();
            this.confirmDeleteButton.click();
        },
    }

});

module.exports = workflowPage;