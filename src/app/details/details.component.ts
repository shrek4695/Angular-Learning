import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tasks: {name: string, status: string}[] = [];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.dataService.statusUpdated.subscribe((status) => {
      console.log("Data Status Updated  ", status);
    })
  }

  ngOnInit() {
    this.tasks = this.dataService.tasks;
  }

  // onTaskAdded(newTask: {name: string, status: string}) {
  //   this.dataService.addTask(newTask);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.tasks[updateInfo.id].status = updateInfo.newStatus;
  // }

  reloadComp() {
    this.router.navigate(['/details'], {relativeTo: this.route});
  }

}
