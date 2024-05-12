import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    NoticiasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
