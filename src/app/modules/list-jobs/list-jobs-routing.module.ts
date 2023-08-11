import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJobsComponent } from './list-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: ListJobsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListJobsRoutingModule { }
