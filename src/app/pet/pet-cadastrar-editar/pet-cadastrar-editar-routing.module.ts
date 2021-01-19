import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PetCadastrarEditarComponent } from "./pet-cadastrar-editar/pet-cadastrar-editar.component";
import { PetResolverService } from "./pet-resolver.service";

const routes: Routes = [
    {
        path: "",
        component: PetCadastrarEditarComponent,
        resolve: {
            pet: PetResolverService,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PetCadastrarEditarRoutingModule {}
