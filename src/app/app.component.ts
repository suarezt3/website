import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./shared/menu/menu.component";
import { InicioComponent } from './pages/inicio/inicio.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, MenuComponent, InicioComponent]
})
export class AppComponent {
  title = 'website';
}
