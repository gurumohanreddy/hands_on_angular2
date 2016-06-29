import { Component, OnInit,Input, Output ,EventEmitter  } from '@angular/core';
import {Klass,Section,Student} from '../shared/resources';

@Component({
  moduleId: module.id,
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() studentList:Student[];
  @Output() onStudentClick = new EventEmitter<Student>();
  student :Student;
  constructor() {}

  ngOnInit() {
  }

  onClick(student){
    // console.log(student);
    this.onStudentClick.emit(student);
  }

}
