import { Quizz } from "../../../domain/model/quizz";
import { Observable } from "rxjs/Observable";

export interface IQuizzRepository {
    getAllQuizz(id: number): Observable<Array<Quizz>>;
}
