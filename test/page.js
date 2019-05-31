import { Selector, ClientFunction } from 'testcafe';
import { username, password, url } from '../config';


export default class TestPage {

    constructor() {
        this.title = Selector("title");
        this.navbar = Selector('.navbar.navbar-inverse', { visibilityCheck: true });
        this.uRl = url;
        this.firstName = Selector('input.form-control').withAttribute('placeholder', 'First Name');
        this.lastName = Selector('input.form-control').withAttribute('placeholder', 'Last Name');
        this.user = username;
        this.pwrd = password;
    }
}