import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Option } from '../../interface/option';
import { QuizzService } from '../../domain/service/quizzService';
import { Quizz } from '../../domain/model/quizz';
import { ThemeService } from "../../domain/service/themeService";
import { Theme } from "../../domain/model/theme";

@Component({
  selector: 'page-option',
  templateUrl: 'option.html'
})
export class OptionPage implements OnInit {
selectLevels: Option[] = []
numQuestion: any;
quizz: Quizz[] = [];
themeResult: Array<Theme>;
quizzByLevel: Quizz[] = []
quizzByLevelResult: Quizz;
quest: any




  constructor(@Inject('QuizzService') public quizzService: QuizzService, public navCtrl: NavController,
              @Inject('ThemeService') public themeService: ThemeService) {}

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
        })
    })

    this.themeService.findAllTheme()
    .subscribe((theme: Array<Theme>)=>{
      this.themeResult = theme;
    })  
  }

  selectLevel = [
    {id: 0, level: 'Facile'},
    {id: 1, level: 'Moyen'},
    {id: 2, level: 'Difficile'}
]

switchTheme(title){
  switch(title){
    case 'naruto': 
    this.quizzByLevel = this.quizz;
    break;
    case 'onepiece':
    break;
    case 'bleach':
    break;
    case 'fairytail':
  }
}

getDispatcherLevel(level){
  this.quizzByLevel.filter((row)=>row.level == level).map((result)=>{this.quizzByLevelResult = result})
  return this.quizzByLevelResult;
}

switchLevel(level){
  switch(level){
    case 'Facile': 
    console.log(this.getDispatcherLevel(level)) 
    this.quizzService.questions.push(this.getDispatcherLevel(level))
    break;
    case 'Moyen':
    console.log(this.getDispatcherLevel(level)) 
    break;
    case 'Difficile':
    console.log(this.getDispatcherLevel(level)) 
  }
}

}