import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { start } from '@popperjs/core';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { GesitionarPeliculasService }  from '../../servicios/gesitionar-peliculas.service';
import { FormsModule } from '@angular/forms';
import { ReproductorVideoComponent as Video } from "../reproductor-video/reproductor-video.component";
declare let YT: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    video = new Video();
    i: any;
  images = [
    { src: '../../../assets/ecdla.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/first-bloodajpg.jpg',alt: "Rombo", video:"7RYpJAUMo2M" },
    { src: '../../../assets/ichib.jpg' ,alt: "Ichigo" , video:"KJFqebJBaT8"},
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha", video:"7RYpJAUMo2M"},
    { src: '../../../assets/ichib.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha" , video:"7RYpJAUMo2M"},
    { src: '../../../assets/first-bloodajpg.jpg',alt: "El club de la ducha", video:"KJFqebJBaT8" },
    { src: '../../../assets/ichib.jpg' ,alt: "El club de la ducha", video:"7RYpJAUMo2M"},
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha" , video:"KJFqebJBaT8"},
    { src: '../../../assets/first-bloodajpg.jpg',alt: "El club de la ducha", video:"KJFqebJBaT8" },
    { src: '../../../assets/ichib.jpg',alt: "El club de la ducha" , video:"KJFqebJBaT8"},
    { src: '../../../assets/ecdla.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/ichib.jpg',alt: "El club de la ducha", video:"KJFqebJBaT8" },
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha" , video:"KJFqebJBaT8"},
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/ichib.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/ecdla.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha", video:"KJFqebJBaT8"},
  ];

  visibleCount = 5;

  currentIndex = 0;
  
  get imagesToDisplay(): any {
    const startIndex = Math.floor(this.currentIndex / this.visibleCount) * this.visibleCount;

    return this.images.slice(startIndex, startIndex + this.visibleCount);
  }

  next() {
    
    this.currentIndex = Math.min(this.currentIndex + this.visibleCount, this.images.length - 1);
  }

  prev() {
    this.currentIndex = Math.max(this.currentIndex - this.visibleCount, 0);
  }

  mostrarDetalle(detalles : any,indice :any){
    (<HTMLInputElement>document.getElementById("divPrincipal")).style.display = "flex";
    (<HTMLInputElement>document.getElementById("divPrincipal")).style.backgroundImage = `linear-gradient(rgb(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),url(${this.images[indice].src})`;
    (<HTMLInputElement>document.getElementById("titulo")).innerText = this.images[indice].alt;
    // preguntar a fernando como meterle una etiqueta de nuestro componente y porqué funciona con el segundo click
    // (<HTMLInputElement>document.getElementById("reproductor")).childNodes[0].remove();
    // (<HTMLInputElement>document.getElementById("reproductor")).appendChild(document.createElement("app-reproductor-video"));
    this.i = indice;
  }
  accion(){
    this.mostrarVideo(this.images[this.i].video)
  }
  mostrarVideo(ID: any):void{
    this.video.mostrarReproductor(ID);
  }
}
