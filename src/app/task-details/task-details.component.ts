import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {

  user: {name: string, id: number};
  taskDetails: {name: string, status: string}
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      name: this.route.snapshot.params['name'],
      id: this.route.snapshot.params['id']
    };
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    })

    this.route.data.subscribe((data: Data) => {
      this.taskDetails = data['task']
    })

  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
