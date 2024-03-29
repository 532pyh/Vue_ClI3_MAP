function load(component) {
    return resolve => require([`twoviews/${component}`], resolve);
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
        path: '*',
        redirect: {
            path: '/'
        }
    }
];
export default routes;
