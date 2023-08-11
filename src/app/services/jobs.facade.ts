import { Injectable } from '@angular/core';
import {  JobListService } from './jobs-api.service';
import {  Job } from '../entities/model-jobs';
import { MatDialog } from '@angular/material/dialog';
import { PopUpMessageComponent } from '../components/pop-up-message/pop-up-message.component';
import { JobStateService } from './jobs-state.service';

@Injectable()
export class JobFacadeService {
  jobListData!: Job[];
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
  // updateIpSearch(ip: string): void {
  //   this.ipState.setIpSearch(ip);
  // }
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
  // searchNewIp(ip:string){
  //   this.ipService.getIpFromApi(ip).subscribe((response: IpData) => {
  //     this.mappingDataFromService(response);
  //   }, (error: any) => {
  //     this.error(error);
  //   });
  // }
}
