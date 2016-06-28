import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Klass} from './klass';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  constructor(private _http:Http){

  }
  getAllKlasses() : Promise<Klass[]>{
    return this._http.get('https://pure-retreat-73401.herokuapp.com/api/v1/klasses.json?access_token=TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4')
    .toPromise()
    .then(response => {
      console.log(response);
      return response.json().klasses
    })
    .catch(this.handleError)
  }
  private handleError(error:any){
    console.log(error);
  }
}