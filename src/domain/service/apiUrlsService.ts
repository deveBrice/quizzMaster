import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ApiUrls } from '../model/apiUrls'; 
import 'rxjs/add/operator/map';


@Injectable()
export class ApiUrlsService implements OnInit{ 
public arrayApiUrls: any[] = [];


  ngOnInit(){
    
  }

  constructor(private http: Http) { }

    getApi(name: string):Observable<Array<ApiUrls>> {
      return this.http.get("https://api.myjson.com/bins/c9a0g")
       .map((result)=>{
           let api : Array<ApiUrls>;
           api = result.json().apiUrls;
           return api;
       })
    }

}