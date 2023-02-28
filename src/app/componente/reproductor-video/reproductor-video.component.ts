import { Component } from '@angular/core';
declare let YT: any;
@Component({
  selector: 'app-reproductor-video',
  templateUrl: './reproductor-video.component.html',
  styleUrls: ['./reproductor-video.component.css']
})
export class ReproductorVideoComponent {
  firstScriptTag? : any;
  mostrarReproductor( ID : any) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    this.firstScriptTag = document.getElementsByTagName('script')[0];
    this.firstScriptTag.parentNode.insertBefore(tag, this.firstScriptTag);
    
    const videoId = ID;
    const playerDiv = document.getElementById('player');
    new YT.Player(playerDiv, {
      height: '360',
      width: '640',
      videoId: videoId
    });
  }
}

// declare var YT: any;

// @Component({
//   selector: 'app-video',
//   templateUrl: './video.component.html',
//   styleUrls: ['./video.component.css']
// })
// export class VideoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//     // Crea un elemento <script> y carga la API de YouTube Player
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // Espera a que la API de YouTube Player se cargue
//     window['onYouTubeIframeAPIReady'] = () => {
//       this.mostrarReproductor();
//     };
//   }

//   mostrarReproductor(): void {
//     // Crea un objeto YT.Player para incrustar el reproductor de video de YouTube
//     const player = new YT.Player('player', {
//       height: '390',
//       width: '640',
//       videoId: 'VIDEO_ID_AQUI',
//       events: {
//         'onReady': () => {
//           player.playVideo();
//         }
//       }
//     });
//   }

// }
