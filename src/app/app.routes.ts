import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [


  { path: 'about', component: AboutComponent},
  { path: 'servicios', component: ServiciosComponent },
  { path: 'proyectos', component: ProyectsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: InicioComponent }

];
