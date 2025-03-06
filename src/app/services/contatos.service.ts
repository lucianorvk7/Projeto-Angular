import { Injectable } from '@angular/core';
import { IContatos } from '../interfaces/contatos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  cadastrarContatos(contato: IContatos){
      return this.http.post(`http://localhost:8080/api/contatos`, contato);
    }
}
