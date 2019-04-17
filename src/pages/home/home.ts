import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { MangaListService } from '../../domain/service/mangaListService';
import { MangaList } from '../../domain/model/mangaList';
import { Quizz } from '../../domain/model/quizz';
import { OptionPage } from '../option/option';
import { QuizzPage } from '../quizz/quizz';
import { ScoreFinalePage } from '../scoreFinale/scoreFinale';
import { Questionnaire } from '../../domain/model/questionnaire';
import { QuizzService } from '../../domain/service/quizzService';
import { ApiUrlsService } from '../../domain/service/apiUrlsService';
import { ApiUrls } from '../../domain/model/apiUrls';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/home.scss']
})

export class HomePage implements OnInit {

  resultMangaList: Quizz[]
  resultQuizz: Questionnaire[] = [];
  quizzByDefault: Array<Questionnaire>;
  quizzByDefaultResult: Questionnaire;
  loader: any;
  resultApiNaruto: ApiUrls
  test: any

  constructor(
          private quizzService: QuizzService, 
          private apiUrlsService: ApiUrlsService,
          public navCtrl: NavController, 
          private mangaListService: MangaListService,
          private modalCtrl: ModalController,
          private loadingCtrl: LoadingController
         ) {  }

         

 ngOnInit(){
   this.quizzService.getAllQuizzDefault()
    .subscribe((resQuizz: Array<Questionnaire>) =>{
      resQuizz.filter((f)=>f.level == 'Facile').map((result)=>
      this.quizzByDefaultResult = result);
      this.quizzService.getRemoveQuizz();
      if(this.quizzService.quizzContainer[0] == null){
       this.quizzService.quizzContainer.push(this.quizzByDefaultResult)
      }
    })
  }

  getResetTimer(){
     this.quizzService.quizzContainer.filter((row)=>{
      row.timer.filter((subRow)=>{
        if(subRow.currentTimer == 0 || subRow.currentTimer){
           subRow.currentTimer = subRow.resetTimer;
        }
      })
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
       content: 'Chargement du quizz...',
    });
    this.loader.present();
  }

  openQuizzPage() {
    this.presentLoading();
   
     setTimeout(() => {
            let modal = this.modalCtrl.create(QuizzPage, this.getResetTimer())
            modal.present();    
            this.hideLoading();
     }, 2000); 
}



hideLoading() {
  this.loader.dismiss();
}

 openModalOptionPage() {
   let modal = this.modalCtrl.create(OptionPage);
   modal.present();
 }

}