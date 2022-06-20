import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { StructDirective } from './Directives/struct.directive';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'new', component: NewTaskComponent,
  },
  {
    path: 'details', component: DetailsComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HighlightDirective,
    StructDirective,
    NewTaskComponent,
    TaskComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
