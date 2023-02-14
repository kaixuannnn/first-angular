import { Component } from '@angular/core';
/* As you can see the input is event binding and the value is properties binding,
which the syntax is writing in this way */
@Component({
  selector: 'app-user',
  template: ` <input type="text" (input)="onUserInput($event)" [value]="name" />
    <p>Hello!</p>
    <p>I'm {{ name }}</p>`,
})
export class UserComponent {
  name = 'kaixuan';
  onUserInput(event: any) {
    this.name = event.target.value;
  }
}
