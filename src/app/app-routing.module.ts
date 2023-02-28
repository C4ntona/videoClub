import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './componente/auth/auth.component';
import { ContactaConComponent } from './componente/contacta-con/contacta-con.component';
import { FormulariRegistroComponent } from './componente/formulari-registro/formulari-registro.component';
import { HistorialComponent } from './componente/historial/historial.component';
import { HomeCarouselComponent } from './componente/home-carousel/home-carousel.component';
import { HomeComponent } from './componente/home/home.component';
import { MembresiaComponent } from './componente/membresia/membresia.component';
import { MenuComponent } from './componente/menu/menu.component';
import { ReproductorVideoComponent } from "./componente/reproductor-video/reproductor-video.component";
import { PerfilComponent } from "./componente/perfil/perfil.component";

const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'auth',component:AuthComponent},
  {path:'formUser',component:FormulariRegistroComponent},
  {path:'contact',component:ContactaConComponent},
  {path:'histor',component:HistorialComponent},
  {path:'home',component:HomeComponent},
  {path:'carousel',component:HomeCarouselComponent},
  {path:'membre',component:MembresiaComponent},
  {path:'reproductor', component:ReproductorVideoComponent},
  {path:'perfil',component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
