import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.moldel';
import { Page, QueryBuilder } from '../_util/Pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'https://apppetz.herokuapp.com/api';
  private endpoint = 'clientes';
  private endpointpost = 'cliente';

  constructor(private httpClient:HttpClient ) {}

  listar(queryBuilder: QueryBuilder): Observable<Page<Cliente>> {

    return this.httpClient
    .get<Cliente[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
    .pipe(
        map(response => <Page<Cliente>>Page.fromResponse(response))
    );

}

cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${this.baseURL}/${this.endpointpost}`, cliente);
}

pesquisarPorId(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseURL}/${this.endpoint}/${id}`);
}

atualizar(cliente: Cliente):Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.baseURL}/${this.endpointpost}`, cliente);
}

deletar(cliente: Cliente):Observable<{}> {

    const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          id: cliente.id,
          nome: cliente.nome,
        },
      };

    return this.httpClient.delete(`${this.baseURL}/${this.endpointpost}`, options);
}

}

