import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
 
})
export class HomeCarouselComponent {
  images = [
    { src: '../../../assets/ecdla.jpg' ,alt: "El club de la ducha" },
    { src: '../../../assets/first-bloodajpg.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/ichib.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha"},
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/ichib.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/first-bloodajpg.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/ichib.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/first-bloodajpg.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/ichib.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/ecdla.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/ichib.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/ecdla.jpg',alt: "El club de la ducha" },
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/ichib.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/ecdla.jpg' ,alt: "El club de la ducha"},
    { src: '../../../assets/first-bloodajpg.jpg' ,alt: "El club de la ducha"},
  ];


  numeroImagenes = 5;

  indiceActual = 0;

  get imagenesAMostrar(): any {
    const indiceInicio = Math.floor(this.indiceActual / this.numeroImagenes) * this.numeroImagenes;
    return this.images.slice(indiceInicio, indiceInicio + this.numeroImagenes);
  }

  next() {
    this.indiceActual = Math.min(this.indiceActual + this.numeroImagenes, this.images.length - 1);
  }

  prev() {
    this.indiceActual = Math.max(this.indiceActual - this.numeroImagenes, 0);
  }
}


