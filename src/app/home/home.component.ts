import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  customSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    // interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customObs = Observable.create( observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 7) {
          observer.complete();
        }
        if(count >9) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    // customObs.pipe(map((data: number) => {
    //   return 'Count Value:'+(data+1);
    // }))

    this.customSub = customObs.pipe(map((data: number) => {
      return (data+1);
    }), filter((data:number) => {
      return data >2;
    })).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log("Completed");
    });
  }

  ngOnDestroy(): void {
    this.customSub.unsubscribe();
  }
  onLoggedIn() {
    this.authService.login();
  }

  onLoggedOut() {
    this.authService.logout();
  }

}
