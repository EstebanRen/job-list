import { Injectable } from '@angular/core';
import {  JobListService } from './jobs-api.service';
import {  Job, JobToSearch } from '../entities/model-jobs';
import { MatDialog } from '@angular/material/dialog';
import { PopUpMessageComponent } from '../components/pop-up-message/pop-up-message.component';
import { JobStateService } from './jobs-state.service';

@Injectable()
export class JobFacadeService {
  jobListData!: Job[];
  jobToSearch!: JobToSearch;

  constructor(
    private jobService: JobListService,
    private jobState: JobStateService,
    private dialog: MatDialog
  ) {
    this.jobService.getJobsFromApi().subscribe((response: Job[]) => {
      this.mappingDataFromService(response);
    }, (error: any) => {
      this.error(error);
    });
  }

  mappingDataFromService(response: Job[]): void {
    this.jobListData=response;
    this.updateJobData(this.jobListData);
  }
  updateJobData(jobData: Job[]): void {
    this.jobState.setJobData(jobData);
  }

  updateFiltersToSearch(data: JobToSearch): void {
    this.jobToSearch=data
    this.jobState.setFiltersToSearch(data);
    this.filterJobs()
  }
  error(error: any): void {
    const dialogRef = this.dialog.open(PopUpMessageComponent, {
      width: '100%',
      panelClass: 'modal-pricing-plans-page',     
      data: {
        title: 'Upss!',
        message: 'Estamos teniendo problemas técnicos, por favor espera mientras traemos tus vuelos de vuelta',
      }
    });
  }
  filterJobs(){
    let filteredJobs = this.jobListData.filter(job => {
      let matchesRole = true;
      let matchesLevel = true;
      let matchesLanguages = true;
      let matchesTools = true;
    
      if (this.jobToSearch.role) {
        matchesRole = job.role === this.jobToSearch.role;
      }
    
      if (this.jobToSearch.level) {
        matchesLevel = job.level === this.jobToSearch.level;
      }
    
      if (this.jobToSearch.languages.length > 0) {
        matchesLanguages = this.jobToSearch.languages.every(language => job.languages.includes(language));
      }
    
      if (this.jobToSearch.tools.length > 0) {
        matchesTools = this.jobToSearch.tools.every(tool => job.tools.includes(tool));
      }
    
      return matchesRole && matchesLevel && matchesLanguages && matchesTools;
    });
   this.updateJobData(filteredJobs);
  }
  // searchNewIp(ip:string){
  //   this.ipService.getIpFromApi(ip).subscribe((response: IpData) => {
  //     this.mappingDataFromService(response);
  //   }, (error: any) => {
  //     this.error(error);
  //   });
  // }
}
