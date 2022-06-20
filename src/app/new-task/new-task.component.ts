import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  //providers: [LoggingServices, DataService]
})
export class NewTaskComponent {
  // @Output() taskAdded = new EventEmitter<{name: string, status: string}>();

  constructor( private dataService: DataService, private router: Router) {}

  onTaskAccount(taskName: string, taskStatus: string) {
    // this.taskAdded.emit({
    //   name: taskName,
    //   status: taskStatus
    // });

    this.dataService.addTask({name: taskName, status: taskStatus});
    this.dataService.statusUpdated.emit("Emitted");
    // this.loggingService = new LoggingServices();
    //this.loggingService.logStatus(taskStatus);
    //console.log('A Task status changed, new status: ' + taskStatus);

    this.router.navigate(['details'])
  }



}
