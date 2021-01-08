import App from "../App";
import PostList  from "../components/posts/PostList";

const routes = {
    home: {
        route: '/',
        component: App
    },
    posts: {
        route: '/posts',
        component: PostList
    },
    programmation: {
        route: '/programmation',
        component: PostList
    },
    restauration: {
        route: '/restauration',
        component: PostList
    },
    parking: {
        route: '/parking',
        component: PostList
    },
    privatisation: {
        route: '/privatisation',
        component: PostList
    },
    actualites: {
        route: '/actualites',
        component: PostList
    },
    infosPratiques: {
        route: '/infos',
        component: PostList
    },
    contact: {
        route: '/contact',
        component: PostList
    },
    compte: {
        route: '/compte',
        component: PostList
    }
}

export default routes;
