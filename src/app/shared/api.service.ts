import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
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

    deleteKlass(klassId): Promise<any>{
      return this._http.delete(`${this._baseUrl}/klasses/${klassId}?access_token=${this._accessToken}`)
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(this.handleError)
    }

    editStudent(student): Promise<any>{
      let params: URLSearchParams = new URLSearchParams();
      params.set('access_token',this._accessToken);
      params.set('id',student.id);
      params.set('name',student.name);
      params.set('fathers_name',student.fathers_name);
      params.set('email',student.email);
      params.set('gender',student.gender);
      params.set('dob',student.dob);
      params.set('phone',student.name);
      params.set('address',student.name);
      return this._http.patch(`${this._baseUrl}/klasses/${student.klass_id}/sections/${student.section_id}/students/${student.id}?access_token=${this._accessToken}`,JSON.stringify({}),{search: params})
      .toPromise()
      .then((resp) => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError)
    }

    createKlass(klassname){
      let params: URLSearchParams = new URLSearchParams();
      params.set('access_token',this._accessToken);
      params.set('name',klassname);
      return this._http.post(`${this._baseUrl}/klasses`,JSON.stringify({}))
    .toPromise()
    .then(response => {
      console.log(response);
    })

    }

  private handleError(error:any){
    console.log('error: '+error);
  }
}
