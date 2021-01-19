import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet.moldel';
import { Page, QueryBuilder } from '../_util/Pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseURL = 'https://apppetz.herokuapp.com/api';
  private endpoint = 'pets';
  private endpointpost = 'pet';

  constructor(private httpClient:HttpClient ) {}

  listar(queryBuilder: QueryBuilder): Observable<Page<Pet>> {

    return this.httpClient
    .get<Pet[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
    .pipe(
        map(response => <Page<Pet>>Page.fromResponse(response))
    );

}

cadastrar(pet: Pet): Observable<Pet> {
    return this.httpClient.post<Pet>(`${this.baseURL}/${this.endpointpost}`, pet);
}

pesquisarPorId(id: string): Observable<Pet> {
    return this.httpClient.get<Pet>(`${this.baseURL}/${this.endpoint}/${id}`);
}

atualizar(pet: Pet):Observable<Pet> {
    return this.httpClient.put<Pet>(`${this.baseURL}/${this.endpointpost}`, pet);
}

deletar(pet: Pet):Observable<{}> {

    const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          id: pet.id,
          nome: pet.nome,
        },
      };

    return this.httpClient.delete(`${this.baseURL}/${this.endpointpost}`, options);
}

}

