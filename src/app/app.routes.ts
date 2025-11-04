import { Routes } from '@angular/router';
import { Home } from './rotas/home/home';
import { About } from './rotas/about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about', 
        component: About
    },
];
