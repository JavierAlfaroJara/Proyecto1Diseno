import { Component, OnInit } from '@angular/core';
import { AudioDBService } from 'src/app/services/audioDb-service/audio-db.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  imagenLink = ""
  nombre = ""
  estilo = ""
  genero = ""
  annoFormacion = ""
  about = ""
  esBanda = false

  search = ""

  constructor(
    private audioDB: AudioDBService,
    private cookie: CookieService
  ) { let Data = this.cookie.get("data").split("%")
      this.search = Data[1]  }
  ngOnInit(): void {
    

    this.audioDB.getArtistDetails(this.search).subscribe((response)=>{
      this.imagenLink = response.artists[0].strArtistLogo;
      this.nombre = response.artists[0].strArtist;
      this.estilo = response.artists[0].strGenre;
      if(response.artists[0].intMembers != "1"){
        this.esBanda = true
      }
      if(response.artists[0].strGender == "Male"){
        this.genero = "Hombre"
      }
      if(response.artists[0].strGender == "Female"){
        this.genero = "Mujer"
      }
      this.annoFormacion = response.artists[0].intFormedYear;
      this.about = response.artists[0].strBiographyEN;
    });

    

    
  }

}
