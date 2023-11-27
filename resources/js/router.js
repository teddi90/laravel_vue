import {createRouter, createWebHistory} from 'vue-router'

import Index from "./components/Person/Index.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/people',
            name: 'people.index',
            component: () => import('./components/Person/Index.vue')
        },
        {
            path: '/people/create',
            name: 'people.create',
            component: () => import('./components/Person/Create.vue')
        },
        {
            path: '/people/:id/edit',
            name: 'people.edit',
            component: () => import('./components/Person/Edit.vue')
        },
        {
            path: '/people/:id',
            name: 'people.show',
            component: () => import('./components/Person/Show.vue')
        },

    ],
});




