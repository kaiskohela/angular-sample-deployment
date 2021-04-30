import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent  {

  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  sayMessage() {
      alert(this.message);
  }

}
