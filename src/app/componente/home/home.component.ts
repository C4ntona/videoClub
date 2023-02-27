import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { start } from '@popperjs/core';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    { src: '../../../assets/ecdla.jpg' },
    { src: '../../../assets/first-bloodajpg.jpg' },
    { src: '../../../assets/ichib.jpg' },
    { src: '../../../assets/ecdla.jpg' },
    { src: '../../../assets/first-bloodajpg.jpg' },
    { src: '../../../assets/ichib.jpg' },
    { src: '../../../assets/ecdla.jpg' },
    { src: '../../../assets/first-bloodajpg.jpg' },
  ];

  visibleCount = 5;

  currentIndex = 0;
  
  get imagesToDisplay() {
    const startIndex = Math.floor(this.currentIndex / this.visibleCount) * this.visibleCount;
    
    return this.images.slice(startIndex, startIndex + this.visibleCount);
  }

  next() {
    
    this.currentIndex = Math.min(this.currentIndex + this.visibleCount, this.images.length - 1);
  }

  prev() {
    this.currentIndex = Math.max(this.currentIndex - this.visibleCount, 0);
  }
}
