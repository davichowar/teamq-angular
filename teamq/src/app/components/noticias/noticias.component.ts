import { Component } from '@angular/core';
import { Noticia } from 'src/app/models/models';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {
  seccion1: any = [];
  seccion2: any = [];
  
  constructor( private mockService: MockService ) {
    this.seccion1 = mockService.getNoticias(1);
    this.seccion2 = mockService.getNoticias(2);
  }
}
