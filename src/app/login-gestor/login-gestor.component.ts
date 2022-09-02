import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-gestor',
  templateUrl: './login-gestor.component.html',
  styleUrls: ['./login-gestor.scss']
})
export class LoginGestorComponent {

  @Output() aoLogar = new EventEmitter<any>();

  nome: string;
  data: Date;
  telefone: number;
  celular: number;
  email: string;
  endereco: string;
  foto: string;

  login(){
    console.log('Solicitado login');
    const loginEmitir = {nome: this.nome, data: this.data,
      telefone: this.telefone, celular: this.celular,
      email: this.email, endereco: this.endereco, foto: this.foto};
    this.aoLogar.emit(loginEmitir);

    this.limparCampos();
  }

  limparCampos(){
    this.nome = "";
    this.data = null;
    this.telefone = null;
    this.celular = null;
    this.email = "";
    this.endereco = "";
    this.foto = "";
  }
}
