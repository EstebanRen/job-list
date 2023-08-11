import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from 'src/app/entities/model-jobs';
import { JobToSearch } from 'src/app/entities/model-jobs';

@Component({
  selector: 'app-card-jobs',
  templateUrl: './card-jobs.component.html',
  styleUrls: ['./card-jobs.component.css']
})
export class CardJobsComponent {
  @Input() jobListData!: Job[];
  @Input() jobToSearch: JobToSearch = {
    role: '',
    level: '',
    languages: [],
    tools: []
  };
  @Output() filtersChanged: EventEmitter<JobToSearch> = new EventEmitter();
  isFeatured(job: any): boolean {
    return job.featured === true;
  }
  onRoleButtonClick(role: string) {
    this.jobToSearch=({...this.jobToSearch , role:role }) 
    this.updateFilters(this.jobToSearch);

  }
  onLevelButtonClick(level: string) {
    this.jobToSearch=({...this.jobToSearch , level:level }) 
    this.updateFilters(this.jobToSearch);

  }
  onLanguageButtonClick(language: string) {
    const updatedLanguages = this.toggleFilter([...this.jobToSearch.languages], language);
    this.jobToSearch = { ...this.jobToSearch, languages: updatedLanguages };
    this.updateFilters(this.jobToSearch);
  }
  
  onToolButtonClick(tool: string) {
    const updatedTools = this.toggleFilter([...this.jobToSearch.tools], tool);
    this.jobToSearch = { ...this.jobToSearch, tools: updatedTools };
    this.updateFilters(this.jobToSearch);
  }
  toggleFilter(filterArray: string[], filter: string): string[] {
    if (filterArray.includes(filter)) {
      return filterArray.filter(item => item !== filter);
    } else {
      return [...filterArray, filter];
    }
  }
  updateFilters(updatedFilters: JobToSearch): void {
    this.filtersChanged.emit(updatedFilters);
  }
}
