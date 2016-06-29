import { Component, OnInit,Input } from '@angular/core';
import {Student} from '../shared/resources';

import { APIService } from '../shared/api.service';



@Component({
  moduleId: module.id,
  selector: 'app-studentdetail',
  templateUrl: 'studentdetail.component.html',
  styleUrls: ['studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  @Input('studentDetail') student:any;


  constructor(private _apiService:APIService) {}

  ngOnInit() {
  }

  editstudent(student){
    console.log(student);
    this._apiService.editStudent(student)
    .then(result => {
      console.log(result);
      // this.student = result;
    });
  }

}
