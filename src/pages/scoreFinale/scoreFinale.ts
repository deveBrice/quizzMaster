import { Component, OnInit } from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector:'page-score-finale',
    templateUrl:'scoreFinale.html'
})

export class ScoreFinalePage implements OnInit {
    scoreFinale: number;
 
    constructor(private navParams: NavParams, private navCtrl: NavController){}

    ngOnInit(){
        this.scoreFinale = this.navParams.data;
        console.log()
    }
    backToHome() {
        this.navCtrl.push(HomePage);
    }
}