import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { LoggingServices } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, LoggingServices]
})
export class AppComponent {
  constructor() {}
}
