import { Component , OnInit} from '@angular/core';
import { KlassListComponent } from '../app/klass/klass-list.component';
import { SectionListComponent } from '../app/section/section-list.component';
import { APIService } from '../app/shared/api.service';
import {Klass,Section,Student} from '../app/shared/resources';

@Component({
  moduleId: module.id,
  selector: 'angular2-hackathon-app',
  templateUrl: 'angular2-hackathon.component.html',
  directives : [KlassListComponent,SectionListComponent],
  providers : [APIService],
  styleUrls: ['angular2-hackathon.component.css']
})
export class Angular2HackathonAppComponent implements OnInit {
  klasses:Klass[];
  sections:Section[];
  students:Student[];

  constructor(private _apiService:APIService){

  }
  loadSections(sections){
    console.log(sections);
    this.sections = sections;
  }
  loadStudents(students){
    console.log(students);
    this.students = students;
  }
  ngOnInit(){
    this._apiService.getAllKlasses()
    .then(klasses => this.klasses = klasses)
  }
}
