import { NgModule } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { CanDeactivateGaurd } from './new-task/can-deactivate-gaurd.service';
import { ErrorComponent } from './error/error.component';
import { TaskResolver } from './task-details/task-resolver.service';

const appRoutes: Routes = [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'new', component: NewTaskComponent, canDeactivate: [CanDeactivateGaurd], children: [{
        path: ':id', component: NewTaskComponent
      }]
    },
    {
      path: 'details', component: DetailsComponent, canActivateChild:[AuthGaurd], children: [
        {
          path: ':id', component: TaskDetailsComponent, resolve: {task: TaskResolver}
        },
        {
          path: ':id/edit', component: NewTaskComponent
        },
        {
          path: ':id/:name', component: TaskDetailsComponent, resolve: {task: TaskResolver}
        }
      ]
    },
    {
      path: 'notFound', component: NotFoundComponent
    },
    // {
    //   path: '**', redirectTo: '/notFound'
    // }
    {
      path: '**', component: ErrorComponent, data: {message: 'Not Found'}
    }
  ]

  @NgModule({
    imports:[RouterModule.forRoot(appRoutes, {useHash: true})],
    exports:[RouterModule]
  })

  export class AppRoutingModule {}