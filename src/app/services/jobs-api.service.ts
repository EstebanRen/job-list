import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Job } from '../entities/model-jobs';

@Injectable({
  providedIn: 'root'
})

export class JobListService {

  constructor(private http: HttpClient) { }
  
  getJobsFromApi() {
    return this.http.get<Job[]>(environment.urlDataJobs);
  }
}
