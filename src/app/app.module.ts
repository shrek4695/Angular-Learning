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


import { DataService } from './services/data.service';
import { LoggingServices } from './services/logging.service';
import { AuthService } from './services/auth.service';
import { AuthGaurd } from './services/auth-gaurd.service';
import { CanDeactivateGaurd } from './new-task/can-deactivate-gaurd.service';
import { ErrorComponent } from './error/error.component';
import { TaskResolver } from './task-details/task-resolver.service';
import { ActivatedRouteSnapshot } from '@angular/router';



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
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService, LoggingServices, AuthService, AuthGaurd, CanDeactivateGaurd, TaskResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
