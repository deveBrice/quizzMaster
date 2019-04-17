import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavController, AlertController, ModalController, Nav,  ViewController, LoadingController } from 'ionic-angular';
import { QuizzService }  from '../../domain/service/quizzService';
import { Life } from '../../domain/model/life';
import { Joker } from '../../domain/model/joker';
import { Timer } from '../../domain/model/timer';
import { Quizz } from '../../domain/model/quizz';
import { ScoreFinalePage } from '../scoreFinale/scoreFinale';
import { Questionnaire } from "../../domain/model/questionnaire";
import moment from 'moment';

@Component({
  selector: 'page-quizz',
  templateUrl: './quizz.html',
  styleUrls:['/quizz.scss']
})

export class QuizzPage implements OnInit {

 @ViewChild(Nav) nav: Nav;
  quizzResult: Quizz;
  displayQuizz: Questionnaire
  resultNumberQuestion: number; 
  numberQuestion: number;
  randomNumbers: any;
  response: boolean = true;
  trueStatus: boolean = false;
  falseStatus: boolean = false;
  score: number;
  i: number = 0;
  flag: boolean = true;
  flagJoker: boolean;
  lifeTab: Array<Life>;
  lifeNumber: number;
  resultDisplayLife: Array<Life>;
  resultNumberLife: number;
  resultRemoveLife: Array<Life>;
  resultJokerNumber: number;
  jokerTab: Array<Joker>;
  jokerNumber: number;
  resultDisplayJoker: Array<Joker>;
  resultJokerRemove: Array<Joker>;
  flagPastQuestion: boolean = false;
  arrayCurrentTimer: Array<Timer>;
  currentTimerResult: number;
  started: boolean;
  currentId: number;
  timeOutResponse: boolean = false;
  stroke: number = 10;
  loader: any;

  constructor(private quizzService: QuizzService, public navCtrl: NavController,  private modalctrl: ModalController, private alertCtrl: AlertController, private viewCtrl: ViewController, private loadingCtrl: LoadingController) {

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
  
    this.quizzService.quizzContainer.filter((row)=>{
        row.quizz.filter((subRow)=>
          subRow.id == this.randomNumbers[this.i],  
          ).map(result => this.quizzResult = result)
      })
        this.quizzService.quizzContainer.filter((row)=>{
          this.displayQuizz = row;
        })
      this.getStartTimer();
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
   this.quizzService.quizzContainer.filter((row)=>{
      this.numberQuestion = row.numberQuestion;
   })
   
 return this.numberQuestion;
}

getDisplayLife(indexLife: number){
  this.quizzService.quizzContainer.filter((row)=>{
    this.lifeTab = row.lifeTab;
    
     this.resultRemoveLife = this.lifeTab.slice(0, indexLife);
     
  })
    return this.resultRemoveLife;
}

getDisplayJoker(indexJoker: number){
  
  this.quizzService.quizzContainer.filter((row)=>{
    this.jokerTab = row.jokerTab;
     this.resultJokerRemove = this.jokerTab.slice(0, indexJoker)
  })
 
  return this.resultJokerRemove;
}

getNumberLife(){
  this.quizzService.quizzContainer.filter((row)=>{
   this.lifeNumber = row.lifes;
  })
  return this.lifeNumber;
}

getJokerNumber(){
  this.quizzService.quizzContainer.filter((row)=>{
     this.jokerNumber = row.jokers;
  })
  return this.jokerNumber;
}

getArrayTimer(){
      this.quizzService.quizzContainer.filter((row)=>{
       this.arrayCurrentTimer = row.timer;
  })
  return this.arrayCurrentTimer;
}

getCurrentCountDown(){
   if(this.started != false){
     this.quizzService.quizzContainer.filter((row)=>{
       row.timer.filter((subRow)=>{
         if(subRow.currentTimer > 0){
         this.started =! subRow.startedTimer;
         this.currentTimerResult = subRow.currentTimer--;
          this.timeOut();    
        } else {
          this.timeOutResponse =! this.timeOutResponse;
          this.resultNumberLife = this.resultNumberLife -1;
          this.resultDisplayLife = this.getDisplayLife(this.resultNumberLife);
          this.gameOver(this.resultNumberLife, this.score);
        }
       })  
     })
     return this.currentTimerResult;
     }
   }

  getResetTimer(){
    this.quizzService.quizzContainer.filter((row)=>{
      row.timer.filter((subRow)=>{
        if(subRow.currentTimer || subRow.currentTimer === 0){
          subRow.currentTimer = subRow.resetTimer;
        }
      })
    })
  }

timeOut(){
    var timeOut = null;
    timeOut = setTimeout(()=>{
    this.getCurrentCountDown();
    }, 800);
  }

getStartTimer() {
     this.started = true
     this.timeOut();
   }

pause(){
     
   if(this.started == true){
     this.started = false;
     }
   }

getFormatTimer(input, units) {
    if(input == 0) {
      return 0;
    } else {
      let duration = moment().startOf('day').add(input, units);
      let format = "";

      if(duration.hour() > 0) {
        format += "H[h]";
      } 
      if(duration.minute() > 0) {
        format += "m[min]";
      } 
      if(duration.second() > 0) {
        format += "s[s]";
      } 
      return duration.format(format);
    }
  };

trueResponse(currentId: number){
  let number = this.randomNumbers[this.i];
    if(currentId == number && this.quizzResult.response == this.response){
      this.trueStatus =! this.trueStatus;
      this.pause();
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
    
      this.gameOver(this.resultNumberLife, this.score);
      this.flagJoker = false;
      this.pause();
    }
}

falseResponse(currentId: number) {
 let number = this.randomNumbers[this.i];
  if(currentId == number && this.quizzResult.response != this.response){
    this.trueStatus = !this.trueStatus; 
    this.pause();
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
      this.gameOver(this.resultNumberLife, this.score);
      this.flagJoker = false;
      this.pause();
    }  
}

getGoodResponse(currentId: number) {
   this.quizzService.quizzContainer.filter((row)=>{
     row.quizz.filter((subRow)=>{
       if(subRow.id == currentId){
         return subRow.rightAnswer;
       }
     })
   })
}

getNextQuestion(){
   this.pause();
   this.presentLoadingCustom();
   setTimeout(() => {
  this.i = this.i + 1;
  this.finalScore(this.i, this.score)
  let nextRandomNumber = this.randomNumbers[this.i];
  this.quizzService.quizzContainer.filter((row)=>{
    row.quizz.filter((subRow)=>
    subRow.id == nextRandomNumber,
    ).map(result => this.quizzResult = result)
  })
  this.trueStatus = false;
  this.falseStatus = false;
  this.timeOutResponse = false;
  this.flagJoker = false;
  if( this.i != 10){
      this.getResetTimer();
      this.getStartTimer();
    }    
    this.loader.dismiss(); 
  }, 500);
}

 presentLoadingCustom() {
  this.loader = this.loadingCtrl.create({
    content: '',
    spinner: 'dots',
    cssClass: 'my-loading-class'
  });
  this.loader.present();
}


finalScore(position: number, finalScore: number) {
  if(position == 10){
     this.pause();
      const modal = this.modalctrl.create(ScoreFinalePage, {score: finalScore});
       modal.present();
    } 
}
 

   gameOver(lifePoint: number, result: number) {
      if(lifePoint == 0){
       this.pause();
         const modal = this.modalctrl.create(ScoreFinalePage, {score: result});
        modal.present();
      }
  }

  jokerResponse(){ 
    if(this.resultJokerNumber != 0){
    this.flagJoker = true;
    this.quizzService.quizzContainer.filter((row)=>{
       row.quizz.filter((subRow)=>{
         subRow.id == this.randomNumbers
       }).map(result => this.quizzResult = result)
    })
    
    this.resultJokerNumber = this.resultJokerNumber -1;
    this.resultDisplayJoker = this.getDisplayJoker(this.resultJokerNumber);
    }
  }

  pastQuestion(){
    this.flagPastQuestion = true;
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

  dismiss(){
    this.viewCtrl.dismiss();
    this.pause();
  }

  dismissModal(){
    this.flagPastQuestion = true;
    const alert = this.alertCtrl.create({
      title: 'Retour au menu principale',
      message: 'Voulez-vous vraiment quitter ce quizz?',
     buttons: [
       {
        text: 'Non',
        handler: () =>{}
       },
       {
         text: 'Oui',
         handler: () => this.dismiss()
       },
     ]
    });
   alert.present();
  }
 
}
