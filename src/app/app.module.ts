import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task-item/task-item.component';
import { DemosComponent } from './demos/demos.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { StructDirective } from './Directives/struct.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DemosComponent,
    HighlightDirective,
    StructDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
