import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/models';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  categorias: Categoria[] = [];

  constructor( private mockService: MockService ) {
    this.categorias = mockService.getCategorias();
  }

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.categorias.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.categorias.length) % this.categorias.length;
  }
}
