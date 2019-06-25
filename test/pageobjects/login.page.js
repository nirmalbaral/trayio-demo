// login.page.js
import Page from './page';

class LoginPage extends Page {

    get username() { return $('input[name="username"]'); }
    get password() { return $('input[name="password"]'); }
    get submitBtn() { return $('button[type="submit"]'); }
    get createFlowBtn() { return $('a[data-qa="create-workflow-btn"]'); }
    get logoutBtn() { return $('span=Logout'); }
    get userAvatar() { return $('span[data-qa="tooltip-button"]'); }

    get loginHeaderText() { return $('.Login-header-*="Account Login"');}

    open() {
        super.open('login');
    }

    submit() {
        this.submitBtn.click();
    }

}

export default new LoginPage();