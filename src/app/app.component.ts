import { CadastroService } from './services/cadastro.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pastelaria';

  constructor(private service: CadastroService){

  }


  login($event){
    this.service.adicionar($event);
  }
}
