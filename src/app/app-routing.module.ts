import { NgModule } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'new', component: NewTaskComponent, children: [{
        path: ':id', component: NewTaskComponent
      }]
    },
    {
      path: 'details', component: DetailsComponent, children: [
        {
          path: ':id', component: TaskDetailsComponent
        },
        {
          path: ':id/:name', component: TaskDetailsComponent
        }
      ]
    },
    {
      path: 'notFound', component: NotFoundComponent
    },
    {
      path: '**', redirectTo: '/notFound'
    }
  ]

  @NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
  })

  export class AppRoutingModule {}