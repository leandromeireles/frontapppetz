import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';

const routes: Routes = [

  {path:"", component: ClienteListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteListarRoutingModule { }
