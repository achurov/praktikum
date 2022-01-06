import Router from "../../utils/router";

export default {
    click: function (event: Event): void {
        event.preventDefault()

        const router = new Router();
        router.go(event.currentTarget.getAttribute('href'))
    }
}
