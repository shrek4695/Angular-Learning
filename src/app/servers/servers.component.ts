import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  server = {
    instanceType: 'medium',
    name: 'Production Server',
    status: 'stable',
    started: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
