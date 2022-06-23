import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
//import { LoggingServices } from '../services/logging.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  //providers: [LoggingServices, DataService]
})
export class TaskComponent implements OnInit {
  @Input() task: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);

  }


  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});

    this.dataService.changeTaskStatus({id: this.id, newStatus: status});
    //this.loggingService.logStatus(status);

    //console.log('A Task status changed, new status: ' + status);
    this.dataService.statusUpdated.next(true);
  }

  onEdit() {
    this.router.navigate(['/new',this.id,], {queryParams: {allowEdit: true},fragment: 'Editing'});
  }

}
