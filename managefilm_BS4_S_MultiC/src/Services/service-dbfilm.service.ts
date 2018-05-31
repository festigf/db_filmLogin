import { Injectable } from '@angular/core';
import { Attore } from '../Types_dbfilm/Attore';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpParams, HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceDbfilmService {
  constructor(private http: HttpClient) { }
  //
  getAttori():Observable<Attore[]>{
    return this.http
      .get("http://localhost:3000/listAttori")
      .map(res => res as Attore[]  );
  }  

  getData(tableName,pageIndex,pageSize):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const params = new HttpParams()
      .set('tableName', tableName)
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize);
      
    const options = {
        headers,
        params
      };
    return this.http
      .get("http://localhost:3000/getData",options)
      .map(res => res /*{
        let body = res;
        return body;
      }*/);
  }  


  // mod/ins attore
  modInsAttore(attore:Attore): Observable<any> {
    console.log("mod/ins codAttore :"+attore.nome);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const params = new HttpParams()
      .set('codAttore',   attore.codAttore.toString())
      .set('nome',        attore.nome)
      .set('annoNascita', attore.annoNascita.toString())
      .set('nazionalita', attore.nazionalita);
    const options = {
        headers,
        params
      };
    return this.http.put("http://localhost:3000/ModAttore", null, options)
      .map((response: Response) => response)
      .catch(this.handleError);
  }
  // fine mod/ins attore
  
  // delAttore
  delAttore(codAttore:number): Observable<any> {
    console.log("del codAttore :"+codAttore);
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      const params = new HttpParams()
        .set('codAttore',   codAttore.toString())      ;
      const options = {
          headers,
          params
        };
    return this.http.delete("http://localhost:3000/delAttore" ,  options )
      .map((response: Response) =>response )
      .catch(this.handleError);
  }
  // fine delAttore
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
