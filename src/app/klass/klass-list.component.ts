import {Component, OnInit } from '@angular/core';
import { KlassComponent } from './klass.component';
import {Klass} from './klass';
import { APIService } from './api.service';

@Component({
  selector : 'klass-list',
  templateUrl : 'app/klass/klass-list.component.html',
  directives : [KlassComponent]
})
export class KlassListComponent implements OnInit {
  klasses:Klass[];
  constructor(private _apiService:APIService){

  }
  ngOnInit(){
    this.loadKlassess();
  }
  loadKlassess(){
    this._apiService.getAllKlasses()
    .then(klasses => 
      this.klasses = klasses);
  }
}