import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService, DataService]
})
export class UsersComponent implements OnInit {

  isLoggedIn = false;
  user: {name: string};
  data: string;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => {
      this.data = data;
    })
  }

}
