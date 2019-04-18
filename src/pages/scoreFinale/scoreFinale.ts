import { Component, OnInit } from '@angular/core';
import {NavParams, NavController, ModalController, ViewController, LoadingController} from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector:'page-score-finale',
    templateUrl:'./scoreFinale.html',
    styleUrls: ['/src/pages/scoreFinale/scoreFinale.scss']
})

export class ScoreFinalePage implements OnInit {
    finalScoreArray: number[] = [];
     stroke: number = 10;
     loader: any;

     
    constructor(private navParams: NavParams,  private modalctrl: ModalController, private navCtrl: NavController, private viewCtrl: ViewController,
    private loadingCtrl: LoadingController){}

    ngOnInit(){
        this.finalScoreArray.push(this.navParams.data);
    }

   presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Retour à l'accueil...",
    });
    this.loader.present();
  }

    backToHome(){
      this.presentLoading();
      setTimeout(() => {
            this.navCtrl.setRoot(HomePage);
            this.hideLoading();
     }, 2000);
  }

   hideLoading() {
    this.loader.dismiss();
  }
}