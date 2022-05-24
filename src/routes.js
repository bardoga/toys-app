import { ToysApp } from './pages/toy-app.jsx'
import { ToyEdit } from './cmp/toy-edit.jsx'
import { ToyDetails } from './cmp/toy-details.jsx'
import { Login } from './pages/login.jsx'
import { Signup } from './pages/signup.jsx'


export default [

    {
        path: '/login',
        component: Login,
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/toys',
        component: ToysApp,
    },
    {
        path: '/toys/edit/:toyId?',
        component: ToyEdit,
    },
    {
        path: '/toy/:toyId',
        component: ToyDetails,
    },
]