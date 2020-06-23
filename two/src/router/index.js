import Home from '../components/Home'
import About from '../components/About'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

export default routes