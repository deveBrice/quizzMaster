import { Component, OnInit, Inject } from '@angular/core';
import { AlertController, NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { QuizzService }  from '../../domain/service/quizzService';
import { Quizz } from '../../domain/model/quizz';
import { Life } from '../../domain/model/life';
import { Joker } from '../../domain/model/joker';
import { ScoreFinalePage } from '../scoreFinale/scoreFinale';

@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html'
})

export class QuizzPage implements OnInit {

  quizzResult: Quizz;
  resultNumberQuestion: number; 
  numberQuestion: number;
  randomNumbers: any;
  response: boolean = true;
  trueStatus: boolean = false;
  falseStatus: boolean = false;
  score: number;
  i: number = 0;
  flag: boolean = true;
  tests = new Array(10);
  flagJoker: boolean;
  lifeTab: Array<Life>;
  indexLife: number = 3
  lifeNumber: number;
  resultDisplayLife: Array<Life>;
  resultNumberLife: number;
  resultRemoveLife: Array<Life>;
  resultJokerNumber: number;
  jokerTab: Array<Joker>;
  jokerNumber: number;
  resultDisplayJoker: Array<Joker>;
  resultJokerRemove: Array<Joker>;
  quizzDisplayResult: Quizz[] = [];
  errorMessage: string;
  constructor(@Inject('QuizzService') private quizzService: QuizzService, private navCtrl: NavController, private alertCtrl: AlertController) {

}

ngOnInit(){
this.score = 0;
this.flagJoker = false;
this.resultNumberLife = this.getNumberLife();
this.resultDisplayLife = this.getDisplayLife(this.resultNumberLife);
this.resultJokerNumber = this.getJokerNumber();
this.resultDisplayJoker = this.getDisplayJoker(this.resultJokerNumber);

this.resultNumberQuestion = this.getNumberQuestion();
this.randomNumbers = this.getRandomNumber(this.resultNumberQuestion);

  this.quizzService.questions.filter((row)=>{
    row.easy.filter((subRow)=>
     subRow.id == this.randomNumbers[this.i],  
      ).map(result => this.quizzResult = result)
  })
}

getRandomNumber(nq: number){
  let temp =  0
  var numberTab = new Array(nq);
  numberTab[0] = Math.floor(Math.random() * Math.floor(nq))

  for(var i = 0; i<numberTab.length; i++){
  
  temp =  Math.floor(Math.random() * Math.floor(nq));

  for(var j = 0; j<numberTab.length; j++){
      
      if(temp != numberTab[j]){
      
      this.flag = true;
      
      }else {
          
      this.flag = false;
      break;
      }
  }
  
  if(this.flag === true){
      numberTab[i] = temp;
      
  }else {
      i--;
      }
  }

  return numberTab;
  }

getNumberQuestion(){
   this.quizzService.questions.filter((row)=>{
      this.numberQuestion = row.numberQuestion;
   })  
 return this.numberQuestion;
} 



getDisplayLife(indexLife: number){
  this.quizzService.questions.filter((row)=>{
    this.lifeTab = row.lifeTab;
    
     this.resultRemoveLife = this.lifeTab.slice(0, indexLife);
  })
    return this.resultRemoveLife;
}

getDisplayJoker(indexJoker: number){
  
  this.quizzService.questions.filter((row)=>{
    this.jokerTab = row.jokerTab;
     this.resultJokerRemove = this.jokerTab.slice(0, indexJoker)
  })
  return this.resultJokerRemove;

}

getNumberLife(){
  this.quizzService.questions.filter((row)=>{
   this.lifeNumber = row.lifes;
  })
  return this.lifeNumber;
}

getJokerNumber(){
  this.quizzService.questions.filter((row)=>{
     this.jokerNumber = row.jokers;
  })
  return this.jokerNumber;
}

trueResponse(currentId: number){
  let number = this.randomNumbers[this.i];
  
    if(currentId == number && this.quizzResult.response == this.response){
      this.trueStatus =! this.trueStatus;
      if(this.flagJoker == true){

      
        this.score = this.score + 0.5;
        
      }else {
        
        this.score = this.score + 1;
      }
   
     this.flagJoker = false;
    }else {
     
      this.falseStatus =! this.falseStatus;
      
      this.resultNumberLife = this.resultNumberLife -1;
      this.resultDisplayLife = this.getDisplayLife(this.resultNumberLife);
    
      this.gameOver(this.resultNumberLife);
      this.flagJoker = false;
    }
}


falseResponse(currentId: number) {

 let number = this.randomNumbers[this.i];
  if(currentId == number && this.quizzResult.response != this.response){
    this.trueStatus = !this.trueStatus; 
    
   
    if(this.flagJoker == true){

      
      this.score = this.score + 0.5;
      
    }else {
      
      this.score = this.score + 1;
    }
    this.flagJoker = false;
    }else{
      this.falseStatus = !this.falseStatus;
      this.resultNumberLife = this.resultNumberLife -1;
      this.resultDisplayLife = this.getDisplayLife(this.resultNumberLife)
      this.gameOver(this.resultNumberLife);
      this.flagJoker = false;
    }  
}

getNextQuestion(){
  this.i = this.i + 1;
  this.scoreFinale(this.i)
  let nextRandomNumber = this.randomNumbers[this.i];
  this.quizzService.questions.filter((row)=>{
    row.easy.filter((subRow)=>
    subRow.id == nextRandomNumber,
    ).map(result => this.quizzResult = result)
  
  })

  this.trueStatus = false;
  this.falseStatus = false;
}

 scoreFinale(scoreFinale: number){   
    if(scoreFinale == 10){
      this.navCtrl.push(ScoreFinalePage, this.score);
    } 
  }

  gameOver(lifePoint: number) {

      if(lifePoint == 0){
         this.navCtrl.push(ScoreFinalePage, this.score);
      }
  }

  jokerResponse(){ 
    if(this.resultJokerNumber != 0){
    this.flagJoker = true;
    this.quizzService.questions.filter((row)=>{
       row.easy.filter((subRow)=>{
         subRow.id == this.randomNumbers
       })
    }).map(result => this.quizzResult = result)
    
    this.resultJokerNumber = this.resultJokerNumber -1;
    this.resultDisplayJoker = this.getDisplayJoker(this.resultJokerNumber);
    }
  }

  pastQuestion(){
    
    const alert = this.alertCtrl.create({
      title: 'Passer la question',
      message: 'Passer à la question suivante ou prendre un joker? Utiliser un joker par question',
     buttons: [
       {
        text: 'Quitter',
        handler: () =>{}
       },
       {
         text: 'Passer',
         handler: () =>  this.getNextQuestion()
       },
       {
        text: 'Joker',
        handler: () => this.jokerResponse()
      }
     ]
    });
   alert.present();
  }
}