import { Component } from '@angular/core';
import { KlassListComponent } from '../app/klass/klass-list.component';
import { APIService } from '../app/klass/api.service';

@Component({
  moduleId: module.id,
  selector: 'angular2-hackathon-app',
  templateUrl: 'angular2-hackathon.component.html',
  directives : [KlassListComponent],
  providers : [APIService],
  styleUrls: ['angular2-hackathon.component.css']
})
export class Angular2HackathonAppComponent {
  title = 'angular2-hackathon works!';
}
