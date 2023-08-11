import { Component, Input } from '@angular/core';
import { Job } from 'src/app/entities/model-jobs';

@Component({
  selector: 'app-card-jobs',
  templateUrl: './card-jobs.component.html',
  styleUrls: ['./card-jobs.component.css']
})
export class CardJobsComponent {
  @Input() jobListData!: Job[];

}
