import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OptionPage } from '../option/option';
import { QuizzPage } from '../quizz/quizz';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {



  constructor(public navCtrl: NavController) {

  }

  openPageOption() {
    this.navCtrl.push(OptionPage);
 }

 openPageQuizz() {
  this.navCtrl.push(QuizzPage);
}

}
