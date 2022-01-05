import renderDOM from './utils/renderDOM';
import SignInPage from './pages/signin';
import SingUpPage from './pages/signup';
import ChatPage from './pages/chat';
import SettingPage from './pages/setting';
import Router from './utils/router';

const router = new Router("#app");

router
    .use('/', SignInPage)
    .use('/sign-up', SingUpPage)
    .use('/messenger', ChatPage)
    .use('/setting', SettingPage)
    .start();
