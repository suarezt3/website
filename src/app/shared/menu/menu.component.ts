import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

public nav: any;

constructor(private elementRef: ElementRef) {}

ngOnInit() {

 this.nav = this.elementRef.nativeElement.querySelector('#nav');

 }

 abrir() {
  this.nav.classList.add('visible');
 }

 cerrar() {
  this.nav.classList.remove('visible')
 }

}
