import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { AplicacionesDeLimpiezaComponent } from './views/aplicaciones-de-limpieza/aplicaciones-de-limpieza.component';
import { ServiciosDeLimpiezaComponent } from './views/servicios-de-limpieza/servicios-de-limpieza.component';
import { LogisticaIntegralComponent } from './views/logistica-integral/logistica-integral.component';
import { ServiciosPerifericosComponent } from './views/servicios-perifericos/servicios-perifericos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CookiesComponent } from './views/cookies/cookies.component';
import { AvisoLegalComponent } from './views/aviso-legal/aviso-legal.component';
import { CreditosComponent } from './views/creditos/creditos.component';
import { MapaDelSitioComponent } from './views/mapa-del-sitio/mapa-del-sitio.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "empresa", component: EmpresaComponent },
  { path: "aplicaciones-de-limpieza", component: AplicacionesDeLimpiezaComponent },
  { path: "servicios-de-limpieza", component: ServiciosDeLimpiezaComponent },
  { path: "logistica-integral", component: LogisticaIntegralComponent },
  { path: "servicios-perifericos", component: ServiciosPerifericosComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "cookies", component: CookiesComponent },
  { path: "aviso-legal", component: AvisoLegalComponent },
  { path: "creditos", component: CreditosComponent },
  { path: "mapa-del-sitio", component: MapaDelSitioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
