import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-klass',
  templateUrl: 'klass.component.html',
  styleUrls: ['klass.component.css']
})
export class KlassComponent implements OnInit {
  @Input() klass: any;
  constructor() {}

  ngOnInit() {
  }

}
