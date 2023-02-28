import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas';
import { Observable } from "rxjs";
import { GesitionarPeliculasService } from "src/app/servicios/gesitionar-peliculas.service";
import { Router } from '@angular/router';

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
    tablaFiltrada = this.peliculas;
    constructor(private peliculaServicio:GesitionarPeliculasService,private router:Router){
      
    }
    ngOnInit():void{
        this.llamadaPeliculas();
    }
    llamadaPeliculas(){
      this.peliculaServicio.getPeliculas().subscribe(datos =>{
        this.peliculas = datos;
        this.tablaFiltrada = this.peliculas;
      })
    }
    //preguntar a fernando como poder ordenar por el atributo del objeto en angulares
    ordenarLista(){
      this.peliculas.sort((a,b)=>{
        if(a<b)return 1;
        else return -1;
      });
    }
    tablaFiltrar(){
      
      this.tablaFiltrada = this.peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(this.buscador.toLowerCase()));
    }
}
