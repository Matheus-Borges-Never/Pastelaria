import { CadastroService } from './../services/cadastro.service';
import { Router } from '@angular/router';
import { LoginGestorComponent } from './../login-gestor/login-gestor.component';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  emailDB: string = "opotunidades@smn.com.br";
  senhaDB: string = "teste123";
  mensagem: string;
  email: string;
  senha: string;

  alerta: string;

  constructor(private service: CadastroService, private router: Router){

  }

  entrar(){

    if ((this.email) == this.emailDB && (this.senha) == this.senhaDB) {

      this.limparCampos();
      this.router.navigateByUrl('novo-cadastro');

  } else {

    this.mensagem = "E-mail ou a senha estar errado!";
    this.alerta = "alert alert-danger mt-2";

  }

  }

  limparCampos(){
    this.email = "";
    this.senha = "";
  }

}
