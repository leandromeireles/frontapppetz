import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ClienteService } from "../cliente.service";
import { of } from "rxjs";
import { Cliente } from "../cliente.moldel";

@Injectable({
    providedIn: "root",
})
export class ClienteResolverService implements Resolve<Cliente> {
    constructor(private clienteService: ClienteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.clienteService.pesquisarPorId(id);
        }
        return of({} as Cliente);
    }
}
