import indexPage from './pages/index/index'
import signinPage from './pages/signin/signin'
import signupPage from './pages/signup/signup'

const app = document.querySelector("#app");
const path = window.location.pathname;

switch (path) {
    case '/':
        app.innerHTML = indexPage();
        break;
    case '/signin':
        app.innerHTML = signinPage();
        break;
    case '/signup':
        app.innerHTML = signupPage();
        break;
}
