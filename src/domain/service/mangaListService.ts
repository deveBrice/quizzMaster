import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { MangaList } from '../model/mangaList'; 
import 'rxjs/add/operator/map';

@Injectable()
export class MangaListService {

  constructor(private http: Http) { }

    getMangaList():Observable<Array<MangaList>> {
            return this.http.get("https://api.myjson.com/bins/19szp4")
       .map((result)=>{
           let resultMangaList : Array<MangaList>;
           resultMangaList = result.json().mangas;
           return resultMangaList;
       })
    }
}