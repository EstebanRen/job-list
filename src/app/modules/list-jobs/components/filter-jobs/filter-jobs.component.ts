import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobToSearch } from 'src/app/entities/model-jobs';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.css']
})
export class FilterJobsComponent {
  @Input() jobToSearch!: JobToSearch;
  @Output() filtersChanged = new EventEmitter<JobToSearch>();

  hasFiltersApplied(): boolean {
    return (
      this.jobToSearch.role !== '' ||
      this.jobToSearch.level !== '' ||
      this.jobToSearch.languages.length > 0 ||
      this.jobToSearch.tools.length > 0
    );
  }
  
  onRoleFilterRemove() {
    this.jobToSearch.role = '';
    this.updateFilters();
  }

  onLevelFilterRemove() {
    this.jobToSearch.level = '';
    this.updateFilters();
  }

  onLanguageFilterRemove(language: string) {
    this.jobToSearch.languages = this.jobToSearch.languages.filter(lang => lang !== language);
    this.updateFilters();
  }

  onToolFilterRemove(tool: string) {
    this.jobToSearch.tools = this.jobToSearch.tools.filter(t => t !== tool);
    this.updateFilters();
  }

  clearAllFilters(): void {
    this.jobToSearch = {
      role: '',
      level: '',
      languages: [],
      tools: []
    };
    this.updateFilters();
  }

  private updateFilters(): void {
    this.filtersChanged.emit(this.jobToSearch);
  }
}
