import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListarComponent } from './pet-listar/pet-listar.component';

const routes: Routes = [

  {path:"", component: PetListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetListarRoutingModule { }
