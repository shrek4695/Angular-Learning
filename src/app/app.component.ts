import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-project';
  category;
  isTrue= true;

  onCustomEvent(event) {
    this.category= event.category;
  }
}
