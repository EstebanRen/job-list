import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { ListJobsComponent } from './list-jobs.component';
import { ListJobsRoutingModule } from './list-jobs-routing.module';
import { CardJobsComponent } from './components/card-jobs/card-jobs.component';
import { FilterJobsComponent } from './components/filter-jobs/filter-jobs.component';
import { JobFacadeService } from 'src/app/services/jobs.facade';

@NgModule({
  declarations: [
    ListJobsComponent,
    CardJobsComponent,
    FilterJobsComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialAngularModule,
    CommonModule,
    ListJobsRoutingModule,
  ],
  providers: [JobFacadeService],
})
export class ListJobsModule { }
