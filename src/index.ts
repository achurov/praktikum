import renderDOM from './utils/renderDOM';
import SignInPage from './pages/signin';
import SingUpPage from './pages/signup';
import ChatPage from './pages/chat';
import SettingPage from './pages/setting';

// const app = document.querySelector("#app");
const path = window.location.pathname;

switch (path) {
    case '/':
        renderDOM('#app', new SignInPage());
        break;
    case '/signin':
        renderDOM('#app', new SignInPage());
        break;
    case '/signup':
        renderDOM('#app', new SingUpPage());
        break;
    case '/chat':
        renderDOM('#app', new ChatPage());
        break;
    case '/setting':
        renderDOM('#app', new SettingPage());
        break;
    // case '/500':
    //     app.innerHTML = error500Page();
    //     break;
    // default:
    //     app.innerHTML = error400Page();
}


