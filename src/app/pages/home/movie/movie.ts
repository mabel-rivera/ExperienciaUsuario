import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuComponent } from '../menu/menu';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MenuComponent, NavbarComponent],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class MovieComponent {

}
