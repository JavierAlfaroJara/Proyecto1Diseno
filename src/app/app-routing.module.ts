import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* Componentes */
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main",component: MainComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
