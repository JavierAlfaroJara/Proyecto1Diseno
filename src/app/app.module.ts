import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*Angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


/*Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


/*Componentes  */
import { MainComponent } from './Components/main/main.component';

/** Http */
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/info/home/home.component';
import { GeneralInfoComponent } from './Components/info/general-info/general-info.component';
import { FotosComponent } from './Components/info/fotos/fotos.component';
import { DiscografiaComponent } from './Components/info/discografia/discografia.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    GeneralInfoComponent,
    FotosComponent,
    DiscografiaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
