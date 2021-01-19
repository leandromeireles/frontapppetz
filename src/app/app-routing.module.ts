import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {
    path:"cliente",
    loadChildren: () => import('./cliente/cliente-listar/cliente-listar.module').then(modulo => modulo.ClienteListarModule)

  },
  {
    path: "cliente/cadastrar",
    loadChildren: () =>
        import("./cliente/cliente-cadastrar-editar/cliente-cadastrar-editar.module").then(
            (modulo) => modulo.ClienteCadastrarEditarModule
        ),
  },
  {
    path: "cliente/editar/:id",
    loadChildren: () =>
        import("./cliente/cliente-cadastrar-editar/cliente-cadastrar-editar.module").then(
            (modulo) => modulo.ClienteCadastrarEditarModule
        ),
  },
  {
        path: "cliente/cadastrar",
        loadChildren: () =>
            import("./cliente/cliente-cadastrar-editar/cliente-cadastrar-editar.module").then(
                (modulo) => modulo.ClienteCadastrarEditarModule
            ),
    },
    {
      path:"pet",
      loadChildren: () => import('./pet/pet-listar/pet-listar.module').then(modulo => modulo.PetListarModule)
  
    },
    {
      path: "pet/cadastrar",
      loadChildren: () =>
          import("./pet/pet-cadastrar-editar/pet-cadastrar-editar.module").then(
              (modulo) => modulo.PetCadastrarEditarModule
          ),
    },
    {
      path: "pet/editar/:id",
      loadChildren: () =>
          import("./pet/pet-cadastrar-editar/pet-cadastrar-editar.module").then(
              (modulo) => modulo.PetCadastrarEditarModule
          ),
    },
    {
          path: "pet/cadastrar",
          loadChildren: () =>
              import("./pet/pet-cadastrar-editar/pet-cadastrar-editar.module").then(
                  (modulo) => modulo.PetCadastrarEditarModule
              ),
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
