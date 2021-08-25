import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AudioDBService } from 'src/app/services/audioDb-service/audio-db.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-discografia',
  templateUrl: './discografia.component.html',
  styleUrls: ['./discografia.component.css']
})

export class DiscografiaComponent implements AfterViewInit {

  displayedColumns: string[] = ['nombre', 'anno', 'genero', 'actions'];
  ALBUM_DATA : album[] = [];
  albumes : album[] = [];
  search = ""

  dataSource = new MatTableDataSource<album>(this.ALBUM_DATA);

  constructor(
    private audioDB: AudioDBService,
    public dialog: MatDialog,
    private cookie: CookieService 
  ) { }

  ngAfterViewInit(): void {
    let Data = this.cookie.get("data").split("%")
    this.search = Data[0]
    this.getAlbums();
  }

  openDialogInfo(albumId: number){
    console.log(albumId)
  }

  getAlbums(){
    console.log(this.search)
    this.audioDB.getAllAbums(this.search).subscribe((response)=>
    {
      let temp:album[] = []
       for (let index = 0; index < response.album.length; index++) {

         const actual = response.album[index];
 
         const json = {
           idArtist: actual.idArtist, 
           nombre: actual.strAlbum,
           idAlbum: actual.idAlbum, 
           anno: actual.intYearReleased,
           genero: actual.strGenre
         };
         temp.push(json)

       }
       this.albumes = temp
       this.ALBUM_DATA = this.albumes
       this.dataSource.data = this.albumes
    })
   }

}

export interface album{
  idArtist: number;
  nombre: string;
  idAlbum: number;
  anno: number;
  genero: string;
}
