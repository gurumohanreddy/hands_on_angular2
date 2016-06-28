import {Component, OnInit , Input, Output ,EventEmitter } from '@angular/core';
import { KlassComponent } from './klass.component';
import {Klass,Section,Student} from '../shared/resources';

import { APIService } from '../shared/api.service';

@Component({
  selector : 'klass-list',
  templateUrl : 'app/klass/klass-list.component.html',
  directives : [KlassComponent]
})
export class KlassListComponent implements OnInit {
  @Input('klassList') klasses:Klass[];
  @Output() onKlassChange = new EventEmitter<Section[]>();

  constructor(private _apiService:APIService){

  }
  ngOnInit(){

  }
  loadSections(klassId){
    this._apiService.getAllSections(klassId)
    .then(sections => {
      this.onKlassChange.emit(sections);
      console.log('Emitted sections');
      console.log(sections)
    });
  }
}