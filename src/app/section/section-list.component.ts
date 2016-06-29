import {Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { SectionComponent } from './section.component';
import { KlassListComponent } from '../klass/klass-list.component';
import {Section,Student} from '../shared/resources';

import { APIService } from '../shared/api.service';

@Component({
  selector : 'section-list',
  templateUrl : 'app/section/section-list.component.html',
  directives : [SectionComponent,KlassListComponent]
})
export class SectionListComponent implements OnInit {
  @Input('sectionList') sections:Section[];
  @Output() onSectionClick = new EventEmitter<Student[]>();

  constructor(private _apiService:APIService){

  }
  ngOnInit(){

  }
  onClick(section){
    this._apiService.getAllStudents(section)
    .then(students => {
      this.onSectionClick.emit(students);
      // console.log(students);
    });
  }

}
