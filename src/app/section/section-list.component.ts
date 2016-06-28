import {Component, OnInit } from '@angular/core';
import { SectionComponent } from './section.component';
import { KlassListComponent } from '../klass/klass-list.component';
import {Section} from '../shared/resources';

import { APIService } from '../shared/api.service';

@Component({
  selector : 'section-list',
  templateUrl : 'app/section/section-list.component.html',
  directives : [SectionComponent,KlassListComponent]
})
export class SectionListComponent implements OnInit {
  sections:Section[];
  constructor(private _apiService:APIService){

  }
  ngOnInit(){

  }
  loadSections(klassId){
    // Clear of all selected sections and students
    this._apiService.getAllSections(klassId)
    .then(sections => this.sections = sections);
  }
}