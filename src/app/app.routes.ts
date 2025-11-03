import { Routes } from '@angular/router';
import { Sobre } from './componentes/sobre/sobre';
import { Home } from './rotas/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about', 
        component: Sobre
    },
];
