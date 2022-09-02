import { Component } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pastelaria';
  logins: any[] = [];


  login($event){
    console.log($event);
    this.logins.push($event);
  }
}
