import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { CanComponentDeactivate } from './can-deactivate-gaurd.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  //providers: [LoggingServices, DataService]
})
export class NewTaskComponent implements OnInit, CanComponentDeactivate {
  // @Output() taskAdded = new EventEmitter<{name: string, status: string}>();
  allowEdit: boolean;
  isTaskAdded:boolean = false;

  constructor( private dataService: DataService, private router: Router, private route: ActivatedRoute) {}

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.isTaskAdded) {
      return confirm('Do you want to discard your changes ?');
    } else {
      return true;
    }
  };

  ngOnInit(): void {
    this.allowEdit =  this.route.snapshot.queryParams['allowEdit'];
    console.log(this.route.snapshot.fragment);

    // this.route.queryParams.subscribe((params) =>{

    // })
  }

  onTaskAccount(taskName: string, taskStatus: string) {
    // this.taskAdded.emit({
    //   name: taskName,
    //   status: taskStatus
    // });

    this.dataService.addTask({name: taskName, status: taskStatus});
    //this.dataService.statusUpdated.emit("Emitted");
    
    // this.loggingService = new LoggingServices();
    //this.loggingService.logStatus(taskStatus);
    //console.log('A Task status changed, new status: ' + taskStatus);

    this.router.navigate(['details'], {queryParamsHandling: 'preserve'});
    this.isTaskAdded = true;
  }



}