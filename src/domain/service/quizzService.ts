import { Injectable, OnInit, Input } from '@angular/core';
import { Questionnaire } from "../model/questionnaire";
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ApiUrlsService } from './apiUrlsService';
import { ApiUrls } from '../model/apiUrls';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuizzService {
 
  private apiManga: any;
  apiMangaDefault: any;
  displayApi: string;
  quizzContainer: Questionnaire[] = [];
   newResultQuizz: Questionnaire[] = [];
   resultQuizz: Questionnaire[] = [];
  resultUrl: string;
  resultApiNaruto: ApiUrls;
  url = "https://api.myjson.com/bins/djse8";
  apiResult: string;
    _name: string = '<no name set>';
  api: string;
 
  constructor(private http: Http, private apiUrlsService: ApiUrlsService){

  }

  
   getAllQuizzDefault():Observable<Array<Questionnaire>> {
      return this.http.get(this.url)
       .map((result)=>{
           let quizz: Array<Questionnaire>;
           quizz = result.json().quizz;
           return quizz;
       })
    }

    
 public setNameManga(name: string){
    console.log(name)
     this.apiUrlsService.getApi(name)
      .subscribe((apiNaruto: Array<ApiUrls>)=>{
        apiNaruto.filter((row)=>row.name === name).map((result) => this.resultApiNaruto = result)
         this.apiResult = this.resultApiNaruto.api;
       
      this.setCallApi(this.apiResult);
      this.getCallApi();
      this.getAllQuizz();
      this.getQuizz();
    })
   return this.apiResult;
  }


    public setCallApi(api: string): void{
      this.apiManga = api;
    }

     public getCallApi(): string{
       return this.apiManga;   
    }

   getAllQuizz():Observable<Array<Questionnaire>> {
      return this.http.get(this.getCallApi())
       .map((result)=>{
           let quizz: Array<Questionnaire>;
           quizz = result.json().quizz
           return quizz;
       })
    }

  getQuizz(){
    this.getAllQuizz()
      .subscribe((resQuizz: Array<Questionnaire>) => {
         this.newResultQuizz = this.setRemoveResultQuizz(resQuizz)
      })
       console.log(this.newResultQuizz);
    return this.newResultQuizz;
  }


   getRemoveQuizz(){
    let remove = this.quizzContainer.length;
     if(remove >= 1){
       return this.quizzContainer.splice(0);
     } else {
       return this.quizzContainer;
     }
   }

   setRemoveResultQuizz(result: Array<Questionnaire>){
    let remove = result.length;
    if(remove >= 1){
      return result.splice(0);
    } else {
      return result;
    }
   }
    
// https://api.myjson.com/bins/micci
   
}