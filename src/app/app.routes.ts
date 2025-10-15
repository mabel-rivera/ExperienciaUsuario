import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';
import { Home } from './pages/home/home';
import { MenuComponent } from './pages/home/menu/menu';
import { NavbarComponent } from './pages/home/navbar/navbar';
import { MovieComponent } from './pages/home/movie/movie';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: Home },
    { path: 'menu', component: MenuComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'movie', component: MovieComponent },
];


