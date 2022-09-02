import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Input() logins: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
