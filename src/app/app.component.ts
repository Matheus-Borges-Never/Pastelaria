import { Observable, Subscriber } from 'rxjs';
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

  myimage;

  onChange($event:Event){
    const file=($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File){
    const observable= new Observable((subscriber: Subscriber<any>) => {
        this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      this.myimage = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }


  }
}


