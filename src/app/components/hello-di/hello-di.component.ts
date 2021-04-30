import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-hello-di',
  templateUrl: './hello-di.component.html',
  styleUrls: ['./hello-di.component.scss']
})
export class HelloDiComponent implements OnInit {

  count = 0;

  constructor(private logger: LoggerService) {
  }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
  ngOnInit(): void {
  }

}
