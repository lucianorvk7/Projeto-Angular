import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response';
import { Observable } from 'rxjs';
import { IPeople } from '../interfaces/people';



@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  buscarTodasPessoas(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.url}/products`);
  }

  cadastrarPessoa(pessoa: IPeople){
    return this.http.post(`${this.url}/products/add`, pessoa);
  }

}
