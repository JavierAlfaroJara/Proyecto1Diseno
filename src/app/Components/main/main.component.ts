/** Angular */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  constructor(
    private audioDB: AudioDBService
    ) { }

  ngOnInit(): void {
  }

  /** Metodo para buscar la información del artista */
  searchArtist(){
    try{
      this.audioDB.getArtistDetails(this.search).subscribe((response)=>{
        console.log(response)
      });
    }catch(error){
      Swal.fire({
        title: 'Error',
        text: 'Nombre mal escrito o no hay información ',
        icon: 'error',
        confirmButtonText: 'coll'
      })
    }
    
  }
}
