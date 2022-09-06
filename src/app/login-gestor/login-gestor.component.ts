import { Cadastro } from './../models/cadastro.model';
import { CadastroService } from './../services/cadastro.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  verifica: "";
  mensagem: string;
  alerta: string;

  constructor(private service: CadastroService, private router: Router) {

  }

  login() {

    if ((this.email) == this.verifica && (this.nome) == this.verifica) {
      this.limparCampos();
      this.mensagem = "Preencha Todos os Campos !!";
      this.alerta = "alert alert-danger mt-2";

    } else {
      console.log('Solicitado login');

      const loginEmitir: Cadastro = {
        nome: this.nome, data: this.data,
        telefone: this.telefone, celular: this.celular,
        email: this.email, endereco: this.endereco, foto: this.foto
      };

      this.service.adicionar(loginEmitir)
        .subscribe(resultado => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('cadastro');
        },
          (error) => console.error(error)
        )
    }

  }

  limparCampos() {
    this.nome = "";
    this.data = null;
    this.telefone = null;
    this.celular = null;
    this.email = "";
    this.endereco = "";
    this.foto = "";
  }
}
