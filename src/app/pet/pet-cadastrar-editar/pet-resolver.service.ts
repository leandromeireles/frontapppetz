import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { PetService } from "../pet.service";
import { of } from "rxjs";
import { Pet } from "../pet.moldel";

@Injectable({
    providedIn: "root",
})
export class PetResolverService implements Resolve<Pet> {
    constructor(private petService: PetService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.petService.pesquisarPorId(id);
        }
        return of({} as Pet);
    }
}
