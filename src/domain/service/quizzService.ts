import { OnInit } from '@angular/core';
import { Quizz } from "../model/quizz";
import { IQuizzRepository } from "../../infrastructure/proxy/contract/iQuizzRepository";
import { Observable } from "rxjs/Observable";

export class QuizzService implements OnInit {
public questions: Quizz[] = [];
public quizzResult: Quizz; 
flag: boolean = true;

   constructor(private repository: IQuizzRepository){}

   ngOnInit(){
       console.log(this.questions)
       
   }

   getAllQuizz(id: number): Observable<Array<Quizz>>{
   
   return this.repository.getAllQuizz(id);
}



  quizzContainerID = []

    /*Quizz = [
        {id: 0, question: "Exist-il des volcans sous-marins?", picture:"", response: true, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne réponse", textResponseFalse:"Mauvaise réponse"},
        {id: 1, question: "Exist-il des volcans en Chine?", picture:"",response: false, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 2, question: "Exist-il des volcans en France?", picture:"",response: true, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 3, question: "Exist-il des volcans au Portugal?", picture:"",response: false, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 4, question: "Exist-il des volcans en Italie?", picture:"",response: true, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 5, question: "Est-ce que ce personnage de manga, deviendra un hokage?", picture:"assets/quizzImg/naruto.jpg", response: true, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 6, question: "Est-ce-que le but du jeu mobile 'flappy bird' est de sauter par dessus des haies?", picture:"", response: false, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 7, question: "Le jeu vidéo 'Angry Birds' consite à utiliser un lance pierre pour lancer des oiseaux sur des cochons?", picture:"", response: true, truePicture:"assets/quizzImg/truePicture.png", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 8, question: "Exist-il des volcans en Suisse?", response: true, truePicture:"assets/quizzImg/truePicture.png", picture:"", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"},
        {id: 9, question: "Exist-il des volcans en Espagne?", response: false, truePicture:"assets/quizzImg/truePicture.png", picture:"", falsePicture:"assets/quizzImg/falsePicture.jpg", textResponseTrue:"Bonne reponse", textResponseFalse:"Mauvaise reponse"}
    ];*/

 

       /* getQuizzById(id){
            this.question.filter((q)=>{q.id == id}).map((result)=>{this.quizzResult = result})
        }*/


    LifePoint = [
        {id: 0, life:'fa fa-heart'},
        {id: 1, life:'fa fa-heart'},
        {id: 2, life:'fa fa-heart'}
    ]

    Indice = [
        {id: 0, joker: "assets/quizzImg/joker.png"},
        {id: 1, joker: "assets/quizzImg/joker.png"},
        {id: 2, joker: "assets/quizzImg/joker.png"}
    ]

    
    /*getQuizz(){
       return this.Quizz;
    }*/

    getRandomId(max){
        return Math.floor(Math.random() * Math.floor(max))
    }

    getLife(){
        return this.LifePoint;
    }

    getIndice() {
        return this.Indice;
    }



    /*QuizzId(id: number){
        
    }*/
}
