import { Component } from '@angular/core';
import { KlassListComponent } from '../app/klass/klass-list.component';
import { SectionListComponent } from '../app/section/section-list.component';
import { APIService } from '../app/shared/api.service';

@Component({
  moduleId: module.id,
  selector: 'angular2-hackathon-app',
  templateUrl: 'angular2-hackathon.component.html',
  directives : [KlassListComponent,SectionListComponent],
  providers : [APIService],
  styleUrls: ['angular2-hackathon.component.css']
})
export class Angular2HackathonAppComponent {
  title = 'angular2-hackathon works!';
  reloadSections(sections){
    console.log(sections);
    // this.sections = sections;
  }
}
