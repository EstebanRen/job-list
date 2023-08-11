import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Job } from 'src/app/entities/model-jobs';
import { JobStateService } from 'src/app/services/jobs-state.service';
import { JobFacadeService } from 'src/app/services/jobs.facade';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent {
  jobListData!: Job[];
  jobToSearch!: string[];
  constructor(
    private jobFacade: JobFacadeService,
    private JobState:JobStateService,
    ) {
    combineLatest([
      this.JobState.getJobData(),
      this.JobState.getFiltersToSearch()
    ]).subscribe(([jobData, jobToSearch]) => {
      this.jobListData = jobData;
      this.jobToSearch = jobToSearch;
    });
  }

}
