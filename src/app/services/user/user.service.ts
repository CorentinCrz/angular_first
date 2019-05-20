import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserModel } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Déclaration
   */
  constructor(
    private HttpClient: HttpClient
  ) {  }

  /**
   * Méthodes
   */
  // CRUD créer un item
  public createItem = (userData: UserModel): Promise<any> => {
    // set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-type', 'application-json');

    // requete http post
    return this.HttpClient.post('https://ldp.dwsapp.io/ang-w2', userData, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  }
  // CRUD lire un item
  public readAllItem = (): Promise<any> => {
    // requete http get
    return this.HttpClient.get('https://ldp.dwsapp.io/ang-w2/_all_docs?include_docs=true')
    .toPromise().then(this.getData).catch(this.handleError);
  }

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };
}
