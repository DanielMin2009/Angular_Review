import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmpresaComponent,
    AplicacionesDeLimpiezaComponent,
    ServiciosDeLimpiezaComponent,
    LogisticaIntegralComponent,
    ServiciosPerifericosComponent,
    ContactoComponent,
    CookiesComponent,
    AvisoLegalComponent,
    CreditosComponent,
    MapaDelSitioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
