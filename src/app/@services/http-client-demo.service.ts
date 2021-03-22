import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const _API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HttpClientDemoService {

  constructor(private http: HttpClientDemoService) { }



  public getAll(){
    return this.http.get(_API_URL + '/alldata');
  }

  public create(body:any){
    this.http.post(_API_URL + "/create", body)
  }





}
