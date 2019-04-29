import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskAddComponent } from './task/task-add/task-add.component';

const routes: Routes = [
  {path: '', redirectTo:'tasklist', pathMatch:'full'},
  {path:'tasklist', component: TaskListComponent},
  {path:'addtask', component: TaskAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
