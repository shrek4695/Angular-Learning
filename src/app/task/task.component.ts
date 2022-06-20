import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
//import { LoggingServices } from '../services/logging.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  //providers: [LoggingServices, DataService]
})
export class TaskComponent {
  @Input() task: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private dataService: DataService) {}


  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});

    this.dataService.changeTaskStatus({id: this.id, newStatus: status});
    //this.loggingService.logStatus(status);

    //console.log('A Task status changed, new status: ' + status);
  }

}
