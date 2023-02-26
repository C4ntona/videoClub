import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
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
    //preguntar a fernando como poder ordenar por el atributo del objeto en angulares
    ordenarLista(){
      this.peliculas.sort((a,b)=>{
        if(a<b)return 1;
        else return -1;
      });
    }
}
