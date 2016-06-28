import {Component, OnInit } from '@angular/core';
import { KlassComponent } from './klass.component';
import {Klass} from './klass';
import { KlassService } from './klass.service';

@Component({
  selector : 'klass-list',
  templateUrl : 'app/klass/klass-list.component.html',
  directives : [KlassComponent]
})
export class KlassListComponent implements OnInit {
  klasses:Klass[];
  constructor(private _klassService:KlassService){

  }
  ngOnInit(){
    this.loadKlassess();
  }
  loadKlassess(){
    this._klassService.getAllKlasses()
    .then(klasses => 
      this.klasses = klasses);
  }
}