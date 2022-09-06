import { CadastroService } from './services/cadastro.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pastelaria';

  constructor(private service: CadastroService){

  }
}
