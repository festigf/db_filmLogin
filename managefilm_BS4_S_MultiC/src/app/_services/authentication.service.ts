import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map'

import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpParams, HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User } from '../../Types_dbfilm/User';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(user:User): Observable<any> {
        console.log(user);
        console.log(user.username);
        console.log(user.password);
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        const params = new HttpParams()
          .set('username',   user.username)
          .set('password',   user.password);


        const options = {
            headers,
            params
          };

        console.log(options);  
        
        return this.http.put('http://localhost:3000/authenticate',null, options)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user) { // && user.token
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log("currentUser"+localStorage.getItem('currentUser'));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        console.log("remove currentUser")
    }
    
    iniLogout(): Observable<any> {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        console.log("remove currentUser");
        return Observable.of("remove currentUser");
    }
}