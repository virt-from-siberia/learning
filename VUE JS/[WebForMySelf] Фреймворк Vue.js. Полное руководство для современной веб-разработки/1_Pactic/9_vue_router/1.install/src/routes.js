import VueRouter from 'vue-router'
// import Cars from './pages/cars'
import Home from './pages/home'
// import Car from './pages/car'
import ErrorCmp from './pages/error'
import CarFull from './pages/CarFull'



const Cars = resolve => {
    require.ensure(['./pages/cars.vue'], () => {
        resolve(
            require('./pages/cars.vue')
        )
    });
}

const Car = resolve => {
    require.ensure(['./pages/car.vue'], () => {
        resolve(
            require('./pages/car.vue')
        )
    });
}

export default new VueRouter({
    routes: [{
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        },
        {
            path: '/car/:id',
            component: Car,
            children: [{
                path: 'full',
                component: CarFull,
                name: 'carFull',
                beforeEnter(to, from, next) {
                    console.log('beforeEnter');
                    next();
                }
            }]
        },
        {
            path: '*',
            component: ErrorCmp
        },
        {
            path: '/none',
            redirect: {
                name: 'cars'
            }
        }
    ],
    mod: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {
                selector: to.hash
            };
        }
        return {
            x: 0,
            y: 700
        };
    }
});