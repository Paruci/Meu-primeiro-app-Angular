import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'contatos', component: ContatosComponent },
];