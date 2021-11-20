import signinPage from './pages/signin/signin'
import signupPage from './pages/signup/signup'
import chatPage from './pages/chat/chat'

const app = document.querySelector("#app");
const path = window.location.pathname;

switch (path) {
    case '/':
        app.innerHTML = signinPage();
        break;
    case '/signin':
        app.innerHTML = signinPage();
        break;
    case '/signup':
        app.innerHTML = signupPage();
        break;
    case '/chat':
        app.innerHTML = chatPage();
        break;
}
