import { Component } from '@angular/core';
import { KlassListComponent } from '../app/klass/klass-list.component';
import { KlassService } from '../app/klass/klass.service';

@Component({
  moduleId: module.id,
  selector: 'angular2-hackathon-app',
  templateUrl: 'angular2-hackathon.component.html',
  directives : [KlassListComponent],
  providers : [KlassService],
  styleUrls: ['angular2-hackathon.component.css']
})
export class Angular2HackathonAppComponent {
  title = 'angular2-hackathon works!';
}
