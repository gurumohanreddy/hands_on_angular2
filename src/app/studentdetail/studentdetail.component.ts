import { Component, OnInit,Input } from '@angular/core';
import {Student} from '../shared/resources';


@Component({
  moduleId: module.id,
  selector: 'app-studentdetail',
  templateUrl: 'studentdetail.component.html',
  styleUrls: ['studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  @Input('studentDetail') student:any;

  constructor() {}

  ngOnInit() {
  }

}
