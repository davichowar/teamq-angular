import { Injectable } from '@angular/core';

import { Categoria, Marca, Noticia } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  cantidadMarcas: number = 12;

  constructor() { }

  getCategorias() {
    let categorias: Categoria[] = [
      { nombre: 'Slide 1', descripcion: 'Description for Slide 1' },
      { nombre: 'Slide 2', descripcion: 'Description for Slide 2' },
      { nombre: 'Slide 3', descripcion: 'Description for Slide 3' }
    ];

    return categorias;
  }

  getNoticias(seccion: number): Noticia[] {
    let noticias: Noticia[] = [];
    
    if ( seccion === 1 ) {
      noticias = [
        {
          "titulo": "Nuevos éxitos",
          "subtitulo": "Subtítulo 1",
        },
        {
          "titulo": "Buscador de ideas",
          "subtitulo": "Subtítulo 2",
        },
      ];
    }
    if ( seccion === 2 ) {
      noticias = [
        {
          "titulo": "Más vendidos",
          "subtitulo": "Subtítulo 3",
        },
        {
          "titulo": "Artículo del mes",
          "subtitulo": "Subtítulo 4",
        },
      ];
    }

    return noticias;
  }

  getMarcas(): Marca[] {
    let marcas: any[] = [];
    for (let i = 0; i < this.cantidadMarcas; i++) {
      marcas.push( { nombre: "Marca ", numero: i+1 } );
    }
    return marcas;
  }
}
