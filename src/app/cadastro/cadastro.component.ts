import { Observable, Subscriber } from 'rxjs';
import { Cadastro } from './../models/cadastro.model';
import { CadastroService } from './../services/cadastro.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  logins: any[];
  myimage;



  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((logins: Cadastro[]) => {
      console.table(logins);
      this.logins = logins;
    })
  }

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
