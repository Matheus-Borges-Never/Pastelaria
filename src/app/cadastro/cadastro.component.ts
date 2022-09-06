import { Cadastro } from './../models/cadastro.model';
import { CadastroService } from './../services/cadastro.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  logins: any[];

  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((logins: Cadastro[]) => {
      console.table(logins);
      this.logins = logins;
    })
  }

}
