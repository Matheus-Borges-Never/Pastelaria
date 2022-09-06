import { Cadastro } from './../models/cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private listaCadastro: any[];
  private url = 'http://localhost:3000/cadastros';

  constructor(private httpClient: HttpClient) {
    this.listaCadastro = [];
  }

  get logins() {
    return this.listaCadastro;
  }

  adicionar(login: Cadastro): Observable<Cadastro> {
    this.listaCadastro.push(login);

    return this.httpClient.post<Cadastro>(this.url, login);
  }

  todas(): Observable<Cadastro[]> {
    return this.httpClient.get<Cadastro[]>(this.url);
  }


}
