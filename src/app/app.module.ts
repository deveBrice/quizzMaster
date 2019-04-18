import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScoreFinalePage } from '../pages/scoreFinale/scoreFinale';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuizzPage } from '../pages/quizz/quizz';
import { OptionPage } from '../pages/option/option';
import { HttpModule, Http } from '@angular/http';

import { QuizzService } from '../domain/service/quizzService';
import { MangaListService } from "../domain/service/mangaListService";
import { ApiUrlsService } from '../domain/service/apiUrlsService';
import { SelectLevelService } from '../domain/service/selectLevelService';
import { ReactiveFormsModule } from '@angular/forms';

import { RoundProgressModule } from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizzPage,
    OptionPage,
    ScoreFinalePage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizzPage,
    OptionPage,
    ScoreFinalePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuizzService,
    MangaListService,
    ApiUrlsService,
    SelectLevelService
  ]
})
export class AppModule {}
