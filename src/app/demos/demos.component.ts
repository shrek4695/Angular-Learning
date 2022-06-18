import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  @ContentChild('contentRef', {static: true}) contentChildRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log("Child Ref", this.contentChildRef.nativeElement.innerText);
  }

}
