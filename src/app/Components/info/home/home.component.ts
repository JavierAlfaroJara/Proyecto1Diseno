import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
  }

  retornar(){
    this.cookie.delete("data")
    this.router.navigateByUrl('/main');
  }
}
