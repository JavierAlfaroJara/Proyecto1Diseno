/** Angular */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

/** Alertas */
import Swal from 'sweetalert2';


/** Services */
import { AudioDBService } from 'src/app/services/audioDb-service/audio-db.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  search = ""; 
  data=[]

  constructor(
    private audioDB: AudioDBService,
    private cookie: CookieService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  /** Metodo para buscar la información del artista */
  searchArtist(){
    try{
      this.audioDB.getArtistDetails(this.search).subscribe((response)=>{
        this.cookie.set("data",response.artists[0].idArtist + "%" + this.search);
      });
    }catch(error){
      Swal.fire({
        title: 'Error',
        text: 'Nombre mal escrito o no hay información ',
        icon: 'error',
        confirmButtonText: 'coll'
      })
    }
    setTimeout(() => {
      this.router.navigateByUrl('/info')
      
    },1000)
    

    


  }
}
