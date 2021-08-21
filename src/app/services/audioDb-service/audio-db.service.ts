import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AudioDBService {
  api = '- theaudiodb.com/api/v1/json'
  constructor(private http: HttpClient) { }

  getArtistDetails(params: any){
    return this.http.get(`${this.api}/1/search.php?s=`,{params});
  }
}
