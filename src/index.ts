import renderDOM from './utils/renderDOM';
import SignInPage from './pages/signin';
import SingUpPage from './pages/signup';
import ChatPage from './pages/chat';
import SettingPage from './pages/setting';
import Error400Page from './pages/error400';
import Error500Page from './pages/error500';

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
    case '/500':
        renderDOM('#app', new Error500Page());
        break;
    default:
        renderDOM('#app', new Error400Page());
}


