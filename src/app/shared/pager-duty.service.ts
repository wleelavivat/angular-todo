import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PagerDutyService {
  pagerDutyURL = environment.pagerDutyURL;
  userUrl: String;
  requestOptions: object;

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders({ 'Authorization': 'Token token=y_NbAkKc66ryYTWUXYEu' });
    this.requestOptions = {
      headers: headers
    };
    this.userUrl = this.pagerDutyURL + 'users';

  }

  getUserList() {
    return this.http.get(this.userUrl, this.requestOptions);
  }

  getUser(id: String) {
    return this.http.get(this.userUrl + '/' + id, this.requestOptions);
  }

  getContactMethod(contactURL) {
    return this.http.get(contactURL, this.requestOptions);
  }



}
