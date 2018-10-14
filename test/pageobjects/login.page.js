var pageElement = require("../helpers/pageElement"),
    Page = require("./page");

var loginPage = Object.create(Page, {
    username:               pageElement.pageElement("input[name=username]"),
    password:               pageElement.pageElement("input[name=password]"),
    dashboardFixedHeader:   pageElement.pageElement(".Dashboard-fixed-header--title___1DThTq"),
    loginButton:            pageElement.pageElement("button[type=submit]"),
    logoutButton:           pageElement.pageElement("a[href='/logout']"),
    profileDropdown:        pageElement.pageElement(".Profile-avatar___3Ezd7K"),

    open: {
        value: function() {
            Page.open.call(this, "/login");
        }
    },

    login: {
        value: function(username, password) {
            this.username.setValue(username);
            this.password.setValue(password);
            this.loginButton.click();
        }
    },

    logout: {
        value: function() {
            this.profileDropdown.click();
            this.logoutButton.click();
        }
    }

}); 

module.exports = loginPage;