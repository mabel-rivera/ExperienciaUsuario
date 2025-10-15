import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from './menu/menu';
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MenuComponent, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class Home {

}
