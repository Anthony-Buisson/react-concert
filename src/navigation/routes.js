import App from "../App";
import PostList  from "../PostList";

const routes = {
    home: {
        route: '/',
        component: App
    },
    posts: {
        route: '/posts',
        component: PostList
    }
}

export default routes;
