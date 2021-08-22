import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { from, observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AudioDBService {
  api = 'https://www.theaudiodb.com/api/v1/json'
  constructor(private http: HttpClient) { }
  /** Obtine los detalles de un artista por el nombre 
   * params -> nombre
  */
  getArtistDetails(params: any):Observable<any>{ 
    
    return this.http.get(`${this.api}/1/search.php?s=${params}`);
  }

  /** Obtiene todos albumes de un artista por id del artista 
   * params -> {artistid} */
  getAllAbums(params:any):Observable<any>{
    return this.http.get(`${this.api}/1/album.php?i=${params}`);
  }

  /** Obtiene los detalles de un album espcifico del artista
   * params -> {albumid}
   */
  getAlbumDetails(params: any): Observable<any>{
    return this.http.get(`${this.api}/1/album.php?m=${params}`);
  }

  /** Obtiene todas las canciones de un album en especifico 
   *  params -> {albumid}
   */
  getAllTracksAlbum(params: any):Observable<any>{
    return this.http.get(`${this.api}/1/track.php?m=${params}`);
  }

  /** Obtiene los detalles de una cancion en especifo de un album 
   * params -> {trackid}
  */
  getTrackDetails(params: any):Observable<any>{
    return this.http.get(`${this.api}/1/track.php?h=${params}`)
  }
  /** Obtiene todos los videos musicales de un artista
   * params -> {artistid}
  */
  getAllMusicVideos(params: any): Observable<any>{
    return this.http.get(`${this.api}/1/mvid.php?i=${params}`)
  }

  //Images siguen aqui, no se ha implementado
}
