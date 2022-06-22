import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorString: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorString = this.route.snapshot.data['message'];
  }

}
