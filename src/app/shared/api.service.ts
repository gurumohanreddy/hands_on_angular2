import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Klass,Section} from './resources';
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
      console.log(response);
      return response.json().klasses
    })
    .catch(this.handleError)
  }

  getAllSections(klassId) : Promise<Section[]>{
    return this._http.get(`${this._baseUrl}/klasses/${klassId}/sections.json?access_token=${this._accessToken}`)
    .toPromise()
    .then(response => {
      console.log(response);
      return response.json().sections
    })
    .catch(this.handleError) 
  }
  private handleError(error:any){
    console.log(error);
  }
}