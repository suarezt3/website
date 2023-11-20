import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
