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
import { QuizzHttpProxy } from "../infrastructure/proxy/real/quizzHttpProxy";
import { IQuizzRepository } from "../infrastructure/proxy/contract/iQuizzRepository";

import { ThemeService } from "../domain/service/themeService";
import { IThemeRepository } from "../infrastructure/proxy/contract/iThemeRepository";
import { ThemeHttpProxy } from "../infrastructure/proxy/real/themeHttpProxy";

export function quizzHttpProxy(http): QuizzHttpProxy{
  return new QuizzHttpProxy(http);
} 

export function quizzService(repository: IQuizzRepository): QuizzService {
  return new QuizzService(repository);
}

export function themeHttpProxy(http): ThemeHttpProxy {
  return new ThemeHttpProxy(http);
}

export function themeService(repository: IThemeRepository): ThemeService {
  return new ThemeService(repository);
}

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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'QuizzService', useFactory: quizzService, deps: ['IQuizzRepository']},
    {provide: 'IQuizzRepository', useFactory: quizzHttpProxy, deps: [Http]},
    {provide: 'ThemeService', useFactory: themeService, deps: ['IThemeRepository']},
    {provide: 'IThemeRepository', useFactory: themeHttpProxy, deps: [Http]}
  ]
})
export class AppModule {}
