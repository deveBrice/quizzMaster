import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SelectLevel} from '../model/selectLevel'; 
import 'rxjs/add/operator/map';

@Injectable()
export class SelectLevelService {

  constructor(private http: Http) { }
    getSelectLevel():Observable<Array<SelectLevel>> {
            return this.http.get("https://api.myjson.com/bins/iay9q")
       .map((result)=>{
           let resultSelectLevel: Array<SelectLevel>;
           resultSelectLevel = result.json().selectLevel;
           return resultSelectLevel;
       })
    }
}