import { Component } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

import { Marca } from 'src/app/models/models';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent {
  public marcas: Marca[] = [];


  constructor( private mockService: MockService ) {
    this.marcas = mockService.getMarcas();
  }
}
