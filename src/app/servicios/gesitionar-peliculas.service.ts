import { Injectable } from '@angular/core';
import { MensajesService } from './mensajes.service';
import { Pelicula } from "../interfaces/peliculas";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GesitionarPeliculasService {

  private apiRestUrl = 'http://localhost:8080/ApiPeliculas'; 
  constructor(private mensajeServicio: MensajesService, private http: HttpClient) { }
  getPeliculas(): Observable<Pelicula[]> {
              this.mensajeServicio.add('Servicio pelicula: recuperando pelicula');
    	return this.http.get<Pelicula[]>(this.apiRestUrl + '/').pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Pelicula[]>('getPeliculas', []))
    );
 }
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
          console.error(error); // log to console instead
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
 };}
}
