import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response';




@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  buscarTodasPessoas() {
    return this.http.get<IResponse>(`${this.url}products`);
  }
}
