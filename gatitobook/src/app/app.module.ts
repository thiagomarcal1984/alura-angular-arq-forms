import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
// import { HomeModule } from './home/home.module'; // Lazy loading.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule, // HomeModule será importado nas rotas (lazy loading).
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
