import Block from "./block";
import Route from "./route";


export default class Router {

    static __instance: Router;
    private routes: Array<unknown>;
    private history: History;
    private currentRoute: Route | null;
    private rootQuery: String;

    constructor(rootQuery: String = '') {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this.currentRoute = null;
        this.rootQuery = rootQuery;

        Router.__instance = this;
    }


    use(pathname: String, block: unknown): Router {
        const route = new Route(pathname, block, { rootQuery: this.rootQuery });
        this.routes.push(route);

        return this;
    }

    start() {
        window.onpopstate = (event: PopStateEvent): void => {
            this.onRoute(event.currentTarget.location.pathname);
        };

        this.onRoute(window.location.pathname);
    }

    go(pathname: String) {
        window.history.pushState({}, '', pathname)
        this.onRoute(pathname);
    }

    private onRoute(pathname: String): void {
        const route = this.getRoute(pathname);

        if (this.currentRoute) {
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        route.render();
    }

    private getRoute(pathname: String): Route {
        return this.routes.find((route: Route) => route.match(pathname)) as Route;
    }
}
