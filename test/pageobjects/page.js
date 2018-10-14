function Page () {
    this.title = 'Welcome';
    this.env = process.env.SERVER;
    this.testTime = Date.now();

    switch (this.env) {
        case 'live':
        case 'staging':
        case 'test':
            this.email  = "";
            this.pwd    = "";
            break;

        default:
            this.email  = "";
            this.pwd    = "";
    }

}

Page.prototype.open = function (path) {
    browser.url(path);
};



module.exports = new Page();