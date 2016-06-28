import {Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { KlassComponent } from './klass.component';
import {Klass,Section,Student} from '../shared/resources';

import { APIService } from '../shared/api.service';

@Component({
  selector : 'klass-list',
  templateUrl : 'app/klass/klass-list.component.html',
  directives : [KlassComponent]
})
export class KlassListComponent implements OnInit {
  @Output() onKlassChange = new EventEmitter<Section[]>();
  klasses:Klass[];
  sections:Section[];
  students:Student[];
  constructor(private _apiService:APIService){

  }
  ngOnInit(){
    this.loadKlassess();
  }
  loadKlassess(){
    this._apiService.getAllKlasses()
    .then(klasses => this.klasses = klasses);
  }
  loadSections(klassId){
    // Clear of all selected sections and students
    this.sections = this.students = [];
    this._apiService.getAllSections(klassId)
    .then(sections => {
      this.onKlassChange.emit(sections);
      console.log('Emitted sections');
      console.log(sections)
    });
  }
}