import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-ngif',
  templateUrl: './hello-ngif.component.html',
  styleUrls: ['./hello-ngif.component.scss']
})
export class HelloNgifComponent  {
  message = 'I\'m read only!';
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }

}
