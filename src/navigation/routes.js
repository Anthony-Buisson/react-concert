import Home from "../views/Home";
import PostList  from "../components/posts/PostList";

const routes = {
    home: {
        route: '/',
        component: Home
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
    },
    panier: {
        route: '/panier',
        component: PostList
    }
}

export default routes;
