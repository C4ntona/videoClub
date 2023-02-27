import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas';
import { Observable } from "rxjs";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
    buscador: string ="";
    peliculas:Pelicula[]=[{
      titulo: "Rambo",
      director: "Pollone",
      duracion: 130 ,
      nacionalidad: "EEUU"
    },{
      titulo: "Rocky",
      director: "Pollone",
      duracion: 130 ,
      nacionalidad: "EEUU"
    },{
      titulo: "Yo halcón",
      director: "Pollone",
      duracion: 130 ,
      nacionalidad: "EEUU"
    },{
      titulo: "Zuckerberg",
      director: "Steven",
      duracion: 130 ,
      nacionalidad: "EEUU"
    }];
    tablaFiltrada: Observable<any[]>;
    constructor(){
      this.tablaFiltrada = new Observable(observer => {observer.next(this.peliculas)})
    }
    //preguntar a fernando como poder ordenar por el atributo del objeto en angulares
    ordenarLista(){
      this.peliculas.sort((a,b)=>{
        if(a<b)return 1;
        else return -1;
      });
    }
    tablaFiltrar(){
      
      this.buscador = (<HTMLInputElement>document.getElementById("buscador")).value;
      this.tablaFiltrada = new Observable(observed => {
        const tablaFiltrada = this.peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(this.buscador.toLowerCase()));
        observed.next(tablaFiltrada);
      });
    }
}
