import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  size=40;
  font = 'arial';
  color ='red';
  classes= ['green-tittle','small-tittle'];
  underline= 'underlinee'


}
