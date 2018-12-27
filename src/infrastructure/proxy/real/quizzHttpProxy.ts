import { Quizz } from "../../../domain/model/quizz";
import { IQuizzRepository } from "../contract/iQuizzRepository";

import { Http } from "@angular/http";
import { Observable }from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class QuizzHttpProxy implements IQuizzRepository {

   constructor(private http: Http){}
  
   quizz = "assets/api/quizz.json";
   
   getAllQuizz(id: number): Observable<Array<Quizz>>{
       return this.http.get("assets/api/quizz.json")
       .map((result)=>{
           let quiz: Array<Quizz>;
           quiz = result.json().quizz;
           return quiz;
       })
   }
}