import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { StructDirective } from './Directives/struct.directive';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HighlightDirective,
    StructDirective,
    NewTaskComponent,
    TaskComponent,
    DetailsComponent,
    HomeComponent,
    TaskDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
