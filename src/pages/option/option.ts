import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, LoadingController,  ViewController } from 'ionic-angular';
import { MangaListService } from '../../domain/service/mangaListService';
import { MangaList } from '../../domain/model/mangaList';
import { SelectLevelService } from '../../domain/service/selectLevelService';
import { SelectLevel } from '../../domain/model/selectLevel';
import { QuizzService } from '../../domain/service/quizzService';
import { Questionnaire } from '../../domain/model/questionnaire';
import { Quizz } from '../../domain/model/quizz';

import { ApiUrls } from '../../domain/model/apiUrls';
import { ApiUrlsService } from '../../domain/service/apiUrlsService';


@Component({
  selector: 'page-option',
  templateUrl: 'option.html'
})

export class OptionPage implements OnInit {

  resultMangaList: Array<MangaList>;
  resultSelectLevel: Array<SelectLevel>;
  resultQuizz: Questionnaire[] = [];
  quizzByLevel: Array<Questionnaire>;
  quizzByLevelResult: Questionnaire;
  quest: Quizz;
  option: FormGroup;
  defaultManga: string = 'Naruto';
  defaultLevel: string = 'Moyen';
  isDisabled = false;
  loader: any;
  resultCallApiUrls: ApiUrls;
  resultApi: any;
   
  
  constructor(private quizzService: QuizzService,

    public navCtrl: NavController,
    private mangaListService: MangaListService,
    private selectLevelService: SelectLevelService,
    private apiUrlsService: ApiUrlsService,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController
    
  ) {
    
  }

  ngOnInit() {
    const Mangas = this.resultMangaList;
    const Level = this.resultSelectLevel;
    this.option = new FormGroup({
      Mangas: new FormControl(null, [Validators.required]),
      Level: new FormControl(null, [Validators.required])
    })
    
    this.mangaListService.getMangaList()
      .subscribe((resMangaList: Array<MangaList>) => {
        this.resultMangaList = resMangaList;
      })

    this.selectLevelService.getSelectLevel()
      .subscribe((resSelectLevel: Array<SelectLevel>) => {
        this.resultSelectLevel = resSelectLevel;
      })

<<<<<<< HEAD
    /*this.quizzService.getAllQuizz()
      .subscribe((resQuizz: Array<Questionnaire>) => {
        resQuizz.filter((row) => {
          
          this.resultQuizz.push(row);
=======
  ngOnInit(){
 
   this.quizzService.questions.filter((row)=>{
     row.easy.filter((subRow)=>{
       this.quest = subRow
     })
   })
   

  this.quizzService.getAllQuizz(this.numQuestion)
    .subscribe((quizz: Array<Quizz>)=>{
       quizz.filter((row)=>{
         this.quizz.push(row);
>>>>>>> dev
        })
      })*/

    



    this.option.get('Level').disable()
    this.option.get('Mangas').valueChanges.subscribe((data: any) => {
      if (data) {
        this.option.get('Level').enable()
      }
    })

<<<<<<< HEAD
 
  }


  switchManga(title: string) {
    title = this.option.controls['Mangas'].value;
    switch(title) {
      case 'Naruto':
        this.quizzService.setNameManga(title)
      //  this.quizzByLevel = this.resultQuizz;
       // console.log(this.resultQuizz)
        break;
      case 'One-Piece':
        break;
      case 'Bleach':                    
        break;
      case 'FairyTail':
       this.quizzService.setNameManga(title)
      // this.quizzService.getCallApi()
      // this.quizzByLevel = this.resultQuizz;
        
     //   console.log(this.resultQuizz);
       break;
    }
  }


  

  getDispatcherLevel(level: string) {
  // console.log(this.quizzService.getQuizz())
    this.quizzService.getQuizz().filter((row) =>
      row.level == level
    ).map((result) => { this.quizzByLevelResult = result })
    return this.quizzByLevelResult;
=======
    this.themeService.findAllTheme()
    .subscribe((theme: Array<Theme>)=>{
      this.themeResult = theme;
    })  
>>>>>>> dev
  }

  switchLevel(level: string) {
    level = this.option.controls['Level'].value;
    switch (level) {
      case 'Facile':
        console.log(this.getDispatcherLevel(level));
        this.quizzService.getRemoveQuizz();
        this.quizzService.quizzContainer.push(this.getDispatcherLevel(level));
        break;
      case 'Moyen':
        console.log(this.getDispatcherLevel(level));
        this.quizzService.getRemoveQuizz();
        this.quizzService.quizzContainer.push(this.getDispatcherLevel(level));
        break;
      case 'Difficile':
        console.log(this.getDispatcherLevel(level));
        this.quizzService.getRemoveQuizz();
        this.quizzService.quizzContainer.push(this.getDispatcherLevel(level));
        break;
      case 'Extreme':
        console.log(this.getDispatcherLevel(level));
        this.quizzService.getRemoveQuizz();
        this.quizzService.quizzContainer.push(this.getDispatcherLevel(level));
        break;
    }
  }

  

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Veuillez patienter...",
    });
    this.loader.present();
  }

  dismiss() {
      this.presentLoading();
      setTimeout(() => {
            this.viewCtrl.dismiss();
            this.hideLoading();
     }, 2000);
  }

 hideLoading() {
  this.loader.dismiss();
}

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  closeModal() {
    this.viewCtrl.dismiss()
  }

}