import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
