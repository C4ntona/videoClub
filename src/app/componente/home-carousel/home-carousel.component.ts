import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
 
})
export class HomeCarouselComponent {
  images = [
    { src: '../../../assets/ecdla.jpg' },
    { src: '../../../assets/first-bloodajpg.jpg' },
    { src: '../../../assets/ichib.jpg' },
    { src: '../../../assets/ecdla.jpg' },
    { src: '../../../assets/first-bloodajpg.jpg' },
    { src: '../../../assets/ichib.jpg' },
    { src: '../../../assets/ecdla.jpg' },
    { src: '../../../assets/first-bloodajpg.jpg' },
    { src: '../../../assets/ichib.jpg' },
    { src: '../../../assets/ecdla.jpg' },
    { src: '../../../assets/first-bloodajpg.jpg' },
    { src: '../../../assets/ichib.jpg' },
  ];

  numeroImagenes = 5;

  indiceActual = 0;

  get imagenesAMostrar() {
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


