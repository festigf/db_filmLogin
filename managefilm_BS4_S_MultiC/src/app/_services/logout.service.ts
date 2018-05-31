import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
//import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LogoutService {

  //constructor(private httpClient: HttpClient) { }

  /* iniLogout1(): Observable<any> {
  
          console.log('initializeApp:: inside promise');
          localStorage.removeItem('currentUser');
          return Observable.of("ini remove currentUser");
        };*/
        iniLogout1(): Promise<any> {
            return new Promise((resolve, reject) => {
                console.log('initializeApp:: inside promise');
                localStorage.removeItem('currentUser');
                resolve();
            })
        }

  }


