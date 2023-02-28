import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componente/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './componente/auth/auth.component';
import { FormulariRegistroComponent } from './componente/formulari-registro/formulari-registro.component';
import { ContactaConComponent } from './componente/contacta-con/contacta-con.component';
import { HistorialComponent } from './componente/historial/historial.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HomeComponent } from './componente/home/home.component';
import { HomeCarouselComponent } from './componente/home-carousel/home-carousel.component';
import { MembresiaComponent } from './componente/membresia/membresia.component';

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ReproductorVideoComponent } from './componente/reproductor-video/reproductor-video.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AuthComponent,
    FormulariRegistroComponent,
    ContactaConComponent,
    HistorialComponent,
    FooterComponent,
    HomeComponent,
    HomeCarouselComponent,
    MembresiaComponent,
    ReproductorVideoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
