import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPeople } from '../interfaces/people';



@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  buscarTodasPessoas(): Observable<IPeople[]> {
    return this.http.get<IPeople[]>('http://localhost:8080/api/pessoa');
  }

  buscarPessoaPorId(id: string ){
    return this.http.get<IPeople>(`http://localhost:8080/api/pessoa${id}`);
  }

  cadastrarPessoa(pessoa: IPeople){
    return this.http.post(`http://localhost:8080/api/pessoa/add`, pessoa);
  }


}
