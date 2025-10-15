import { Component, OnInit,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})

export class NavbarComponent implements OnInit {

  pageTitle: string = 'Tv dramas'; // valor por defecto

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Escucha cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.actualizarTitulo();
      });
  }

  actualizarTitulo(): void {
    // Mapea tus rutas al título que quieras mostrar
    const ruta = this.router.url;

    if (ruta.includes('/tv-dramas')) {
      this.pageTitle = 'Tv dramas';
    } else if (ruta.includes('/favoritos')) {
      this.pageTitle = 'Favoritos';
    } else if (ruta.includes('/perfil')) {
      this.pageTitle = 'Mi perfil';
    } else {
      this.pageTitle = 'Inicio';
    }
  }
}