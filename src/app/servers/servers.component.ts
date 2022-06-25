import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  filteredString: string = '';
  statusHighlight = new Promise((resolve, reject ) => {
    setTimeout(() => {
      resolve("Staus highlight");
    }, 1000)
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Deployment Server',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'Production Server',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'medium',
      name: 'UAT Server',
      status: 'failed',
      started: new Date()
    },
    {
      instanceType: 'medium',
      name: 'Staging Server',
      status: 'unstable',
      started: new Date()
    }
  ]
  server = {
    instanceType: 'medium',
    name: 'Production Server',
    status: 'stable',
    started: new Date()
  }

 

  onAddServer() {
    this.servers.push(this.server);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
