export default class Page {
    constructor() {
        this.title = 'Tray.io home page';
    }

    open(path) {
        browser.url(path);
    }
}