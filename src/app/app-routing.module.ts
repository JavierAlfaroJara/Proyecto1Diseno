import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* Componentes */
import { MainComponent } from './Components/main/main.component';
import { HomeComponent } from './Components/info/home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main",component: MainComponent},
  {path: "info", component: HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
