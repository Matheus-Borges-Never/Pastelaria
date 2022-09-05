import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private listaCadastro: any[];
  private url = 'http://localhost:3000/cadastros';

constructor(private httpClient: HttpClient) {
  this.listaCadastro = [];
 }

 get logins(){
  return this.listaCadastro;
 }

 adicionar(cadastro: any){
  this.listaCadastro.push(cadastro);
 }

 todas(): Observable<Cadastro[]>{
  return this.httpClient.get<Cadastro[]>(this.url);
 }


}
