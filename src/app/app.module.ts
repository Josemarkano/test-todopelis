import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { accionComponent } from './pages/accion/accion.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { ComediaComponent } from './pages/comedia/comedia.component';
import { DramaComponent } from './pages/drama/drama.component';
import { TerrorComponent } from './pages/terror/terror.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    accionComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BusquedaComponent,
    ComediaComponent,
    DramaComponent,
    TerrorComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
