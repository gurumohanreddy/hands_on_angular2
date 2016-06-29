import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Klass,Section,Student} from './resources';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  private _baseUrl:string;
  private _accessToken:string;
  constructor(private _http:Http){
    this._baseUrl = 'https://pure-retreat-73401.herokuapp.com/api/v1';
    this._accessToken = 'TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4';
  }
  getAllKlasses() : Promise<Klass[]>{
    return this._http.get(`${this._baseUrl}/klasses.json?access_token=${this._accessToken}`)
    .toPromise()
    .then(response => {
      return response.json().klasses
    })
    .catch(this.handleError)
  }

  getAllSections(klassId) : Promise<Student[]>{
    return this._http.get(`${this._baseUrl}/klasses/${klassId}/sections.json?access_token=${this._accessToken}`)
    .toPromise()
    .then(response => {
      // console.log(response);
      return response.json().sections
    })
    .catch(this.handleError)
  }

    getAllStudents(section): Promise<Section[]>{
      return this._http.get(`${this._baseUrl}/klasses/${section.klass_id}/sections/${section.id}/students.json?access_token=${this._accessToken}`)
      .toPromise()
      .then(response => {
        // console.log(response);
        return response.json().students
      })
      .catch(this.handleError)
    }


  private handleError(error:any){
    console.log(error);
  }
}
