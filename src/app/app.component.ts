import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName='joaquim';
  userdata ={
    email:'Joaquim@rmail.com',
    role:'admin',
  }
  title = 'curso-angular';
}
