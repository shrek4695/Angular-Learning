import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStruct]'
})
export class StructDirective {

@Input() set appStruct(condition) {
  if(condition) {
    this.viewContRef.createEmbeddedView(this.tempRef);
  } else {
    this.viewContRef.clear();
  }

}
  constructor(private tempRef: TemplateRef<any>, private viewContRef: ViewContainerRef) { }

}
