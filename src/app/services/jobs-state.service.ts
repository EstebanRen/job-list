import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Job } from '../entities/model-jobs';

interface State {
  jobData: Job[];
  filtersToSearch:string[];
  error: unknown;
}

@Injectable({ providedIn: 'root' })

export class JobStateService {
  #state = new BehaviorSubject<State>({
    jobData:[],
    filtersToSearch:[],
    error: null,
  });

  getJobData() {
    return this.#state.asObservable().pipe(map((state) => state.jobData));
  }
  getFiltersToSearch() {
    return this.#state.asObservable().pipe(map((state) => state.filtersToSearch));
  }
  getError() {
    return this.#state.asObservable().pipe(map((state) => state.error));
  }
  setJobData(jobData: Job[]) {
    this.#state.next({
      ...this.#state.value,
      jobData:jobData,
    });
  }
  setFiltersToSearch(jobSearch: string[]) {
    this.#state.next({
      ...this.#state.value,
      filtersToSearch:jobSearch,
    });
  }
  setError(error: unknown) {
    this.#state.next({
      ...this.#state.value,
      error,
    });
  }
}
