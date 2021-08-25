import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AudioDBService } from 'src/app/services/audioDb-service/audio-db.service';

@Component({
  selector: 'app-dialogo-canciones',
  templateUrl: './dialogo-canciones.component.html',
  styleUrls: ['./dialogo-canciones.component.css']
})
export class DialogoCancionesComponent implements OnInit {

  idAlbum = 0;
  displayedColumns: string[] = ['nombre'];
  SONGS_DATA : song[] = [];
  songs : song[] = [];

  dataSource = new MatTableDataSource<song>(this.SONGS_DATA);

  constructor(
    public audioDB: AudioDBService,
    public dialogRef: MatDialogRef<DialogoCancionesComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) { 
      this.idAlbum = data.idAlbum;
    }

  ngOnInit(): void {
    this.getCanciones();
  }

  getCanciones(){
    this.audioDB.getAllTracksAlbum(this.idAlbum).subscribe((response=>
      {

        let temp:song[] = []
        for (let index = 0; index < response.track.length; index++) {
 
          const actual = response.track[index];
  
          const json = {
            nombre: actual.strTrack,
          };
          temp.push(json)
        }
        this.songs = temp
        this.SONGS_DATA = this.songs
        this.dataSource.data = this.songs
      }
      ))
  }
  
}
  export interface song{
    nombre: string
  }