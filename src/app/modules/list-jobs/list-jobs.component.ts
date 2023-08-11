import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Job, JobToSearch } from 'src/app/entities/model-jobs';
import { JobStateService } from 'src/app/services/jobs-state.service';
import { JobFacadeService } from 'src/app/services/jobs.facade';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent {
  jobListData!: Job[];
  jobToSearch!: JobToSearch;
  selectedRole: string = '';
  selectedLevel: string = '';
  selectedLanguages: string[] = [];
  selectedTools: string[] = [];

  constructor(
    private jobFacade: JobFacadeService,
    private JobState: JobStateService,
  ) {
    combineLatest([
      this.JobState.getJobData(),
      this.JobState.getFiltersToSearch()
    ]).subscribe(([jobData, jobToSearch]) => {
      this.jobListData = jobData;
      this.jobToSearch = jobToSearch;
      console.log(jobData)
    });
  }
  onFiltersChanged(updatedFilters: any) {
    this.jobToSearch = updatedFilters;
    this.jobFacade.updateFiltersToSearch(this.jobToSearch);  
  }
  // onRoleFilterChange(role: string) {
  //   this.selectedRole = role;
  //   this.getJobToSearch();
  // }
  // onLevelFilterChange(level: string) {
  //   this.selectedLevel = level;
  //   this.getJobToSearch();

  // }
  // onLanguageFilterChange(language: string) {
  //   this.selectedLanguages.push(language);
  //   this.getJobToSearch();

  // }
  // onToolFilterChange(tool: string) {
  //   this.selectedTools.push(tool);
  //   this.getJobToSearch();
  // }

  // getJobToSearch() {
  //   if (this.selectedRole !== this.jobToSearch.role) {
  //     this.jobToSearch.role = this.selectedRole;
  //   }
  //   if (this.selectedLevel !== this.jobToSearch.level) {
  //     this.jobToSearch.level = this.selectedLevel;
  //   }
  
  //   this.jobToSearch.languages = this.selectedLanguages.filter(
  //     (language, index, self) => self.indexOf(language) === index
  //   );
  
  //   this.jobToSearch.tools = this.selectedTools.filter(
  //     (tool, index, self) => self.indexOf(tool) === index
  //   );
  
  // }
}
