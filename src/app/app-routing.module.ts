import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { accionComponent } from './pages/accion/accion.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ComediaComponent } from './pages/comedia/comedia.component';
import { DramaComponent } from './pages/drama/drama.component';
import { TerrorComponent } from './pages/terror/terror.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'accion', component: accionComponent},
  {path:'comedia', component: ComediaComponent},
  {path:'drama', component: DramaComponent},
  {path:'terror', component: TerrorComponent},
  {path:'busqueda', component: BusquedaComponent},
  {path:'detalles/:id', component: DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
