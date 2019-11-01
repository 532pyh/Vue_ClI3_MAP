function load(component) {
    return resolve => require([`oneviews/${component}`], resolve);
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: load('Home'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/one',
        name: 'one',
        component: load('one'),
        meta: {
            title: '的'
        }
    },
    {
        path: '*',
        redirect: {
            path: '/'
        }
    }
];
export default routes;
