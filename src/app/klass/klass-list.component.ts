import {Component, OnInit , Input, Output ,EventEmitter } from '@angular/core';
import { KlassComponent } from './klass.component';
import {Klass,Section,Student} from '../shared/resources';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

import { APIService } from '../shared/api.service';

@Component({
  selector : 'klass-list',
  templateUrl : 'app/klass/klass-list.component.html',
  directives : [KlassComponent]
})
export class KlassListComponent implements OnInit {
  @Input() klassList:Klass[];
  @Output() onKlassClick = new EventEmitter<Section[]>();
  @Output() onKlassAdd = new EventEmitter<any>();

  newklassname: string;

  constructor(private _apiService:APIService){

  }
  ngOnInit(){

  }
  onClick(klassId){
    this._apiService.getAllSections(klassId)
    .then(sections => {
      this.onKlassClick.emit(sections);
      // console.log(sections)
    });
  }

  deleteklass(klassId){
    // this._apiService.deleteKlass(klassId)
    //   .then(res=>{
    //     console.log(res);
    //   })
    console.log(klassId);
  }

  createKlass(){
    this._apiService.createKlass(this.newklassname)
    .then(() => {this.onKlassAdd.emit(this.newklassname); this.newklassname='';})
  }
}
