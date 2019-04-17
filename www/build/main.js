webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_service_mangaListService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__option_option__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quizz_quizz__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_service_quizzService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_service_apiUrlsService__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(quizzService, apiUrlsService, navCtrl, mangaListService, modalCtrl, loadingCtrl) {
        this.quizzService = quizzService;
        this.apiUrlsService = apiUrlsService;
        this.navCtrl = navCtrl;
        this.mangaListService = mangaListService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.resultQuizz = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.quizzService.getAllQuizzDefault()
            .subscribe(function (resQuizz) {
            resQuizz.filter(function (f) { return f.level == 'Facile'; }).map(function (result) {
                return _this.quizzByDefaultResult = result;
            });
            _this.quizzService.getRemoveQuizz();
            if (_this.quizzService.quizzContainer[0] == null) {
                _this.quizzService.quizzContainer.push(_this.quizzByDefaultResult);
            }
        });
    };
    HomePage.prototype.getResetTimer = function () {
        this.quizzService.quizzContainer.filter(function (row) {
            row.timer.filter(function (subRow) {
                if (subRow.currentTimer == 0 || subRow.currentTimer) {
                    subRow.currentTimer = subRow.resetTimer;
                }
            });
        });
    };
    HomePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Chargement du quizz...',
        });
        this.loader.present();
    };
    HomePage.prototype.openQuizzPage = function () {
        var _this = this;
        this.presentLoading();
        setTimeout(function () {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__quizz_quizz__["a" /* QuizzPage */], _this.getResetTimer());
            modal.present();
            _this.hideLoading();
        }, 2000);
    };
    HomePage.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    HomePage.prototype.openModalOptionPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__option_option__["a" /* OptionPage */]);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Developpeur\Front-End\quizzMaster\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <!--<ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>-->\n    <ion-title class="title">\n      Accueil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button class="homeBtn" ion-button large full (click)="openQuizzPage()">Jouer</button>\n    <button class="homeBtn" ion-button large full>Classement</button>\n    <button class="homeBtn" ion-button large full>Proposer une question</button>  \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button class="btn2" ion-button large full (click)="openModalOptionPage()">Option</button>   \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Developpeur\Front-End\quizzMaster\src\pages\home\home.html"*/,
            styleUrls: ['/home.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__domain_service_quizzService__["a" /* QuizzService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__domain_service_quizzService__["a" /* QuizzService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__domain_service_apiUrlsService__["a" /* ApiUrlsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__domain_service_apiUrlsService__["a" /* ApiUrlsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__domain_service_mangaListService__["a" /* MangaListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__domain_service_mangaListService__["a" /* MangaListService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MangaListService = /** @class */ (function () {
    function MangaListService(http) {
        this.http = http;
    }
    MangaListService.prototype.getMangaList = function () {
        return this.http.get("https://api.myjson.com/bins/19szp4")
            .map(function (result) {
            var resultMangaList;
            resultMangaList = result.json().mangas;
            return resultMangaList;
        });
    };
    MangaListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MangaListService);
    return MangaListService;
}());

//# sourceMappingURL=mangaListService.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreFinalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScoreFinalePage = /** @class */ (function () {
    function ScoreFinalePage(navParams, modalctrl, navCtrl, viewCtrl, loadingCtrl) {
        this.navParams = navParams;
        this.modalctrl = modalctrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.finalScoreArray = [];
        this.stroke = 10;
    }
    ScoreFinalePage.prototype.ngOnInit = function () {
        this.finalScoreArray.push(this.navParams.data);
    };
    ScoreFinalePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Retour à l'accueil...",
        });
        this.loader.present();
    };
    ScoreFinalePage.prototype.backToHome = function () {
        var _this = this;
        this.presentLoading();
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            _this.hideLoading();
        }, 2000);
    };
    ScoreFinalePage.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    ScoreFinalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-score-finale',template:/*ion-inline-start:"C:\Developpeur\Front-End\quizzMaster\src\pages\scoreFinale\scoreFinale.html"*/'<script src="https://code.iconify.design/1/1.0.0-rc7/iconify.min.js"></script>\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title class="title">\n\n        ScoreFinale\n\n      </ion-title>\n\n       <!--<ion-buttons left>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n                <ion-icon name="arrow-round-back" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>-->\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="fullScreen">\n\n    <div class="content">\n\n      <div class="scoreFinale">\n\n        <div class="progress-timer" *ngFor="let sfa of finalScoreArray"> \n\n           <div class="timer">\n\n             {{sfa.score}}/10\n\n           </div>\n\n           <round-progress [current]="sfa.score" [max]="10" [color]="\'#45ccce\'" [radius]="100"  [rounded]="true" [stroke]="stroke" [responsive]="false" [animationDelay]="0"></round-progress>\n\n          </div>\n\n        <!--  <div class="congratulation-picture">\n\n            <img class="picture-dimention" src="https://i.ibb.co/Np9Bws7/ribbon-a.png">\n\n            <img class="picture-dimention" src="https://i.ibb.co/F7tbYQ3/ribbon-b.png">     \n\n          </div>-->\n\n    </div> \n\n   <div class="scoreFinale">\n\n    <div id="group-button">\n\n        <button class="btn" ion-button small>Partager</button>\n\n        <button class="btn" ion-button small>Publier</button>\n\n        <button class="btn" ion-button small (click)="backToHome()">Rejouer</button>\n\n    </div>\n\n   </div>\n\n \n\n  </div>\n\n</div>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button class="btnClassement" ion-button large full (click)="openPageClassement()">Classement</button>   \n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Developpeur\Front-End\quizzMaster\src\pages\scoreFinale\scoreFinale.html"*/,
            styleUrls: ['/src/pages/scoreFinale/scoreFinale.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _e || Object])
    ], ScoreFinalePage);
    return ScoreFinalePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=scoreFinale.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_service_mangaListService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_service_selectLevelService__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_service_quizzService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_service_apiUrlsService__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OptionPage = /** @class */ (function () {
    function OptionPage(quizzService, navCtrl, mangaListService, selectLevelService, apiUrlsService, viewCtrl, loadingCtrl) {
        this.quizzService = quizzService;
        this.navCtrl = navCtrl;
        this.mangaListService = mangaListService;
        this.selectLevelService = selectLevelService;
        this.apiUrlsService = apiUrlsService;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.resultQuizz = [];
        this.defaultManga = 'Naruto';
        this.defaultLevel = 'Moyen';
        this.isDisabled = false;
    }
    OptionPage.prototype.ngOnInit = function () {
        var _this = this;
        var Mangas = this.resultMangaList;
        var Level = this.resultSelectLevel;
        this.option = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Mangas: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            Level: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.mangaListService.getMangaList()
            .subscribe(function (resMangaList) {
            _this.resultMangaList = resMangaList;
        });
        this.selectLevelService.getSelectLevel()
            .subscribe(function (resSelectLevel) {
            _this.resultSelectLevel = resSelectLevel;
        });
        /*this.quizzService.getAllQuizz()
          .subscribe((resQuizz: Array<Questionnaire>) => {
            resQuizz.filter((row) => {
              
              this.resultQuizz.push(row);
            })
          })*/
        this.option.get('Level').disable();
        this.option.get('Mangas').valueChanges.subscribe(function (data) {
            if (data) {
                _this.option.get('Level').enable();
            }
        });
    };
    OptionPage.prototype.switchManga = function (title) {
        title = this.option.controls['Mangas'].value;
        switch (title) {
            case 'Naruto':
                this.quizzService.setNameManga(title);
                //  this.quizzByLevel = this.resultQuizz;
                // console.log(this.resultQuizz)
                break;
            case 'One-Piece':
                break;
            case 'Bleach':
                break;
            case 'FairyTail':
                this.quizzService.setNameManga(title);
                // this.quizzService.getCallApi()
                // this.quizzByLevel = this.resultQuizz;
                //   console.log(this.resultQuizz);
                break;
        }
    };
    OptionPage.prototype.getDispatcherLevel = function (level) {
        var _this = this;
        // console.log(this.quizzService.getQuizz())
        this.quizzService.getQuizz().filter(function (row) {
            return row.level == level;
        }).map(function (result) { _this.quizzByLevelResult = result; });
        return this.quizzByLevelResult;
    };
    OptionPage.prototype.switchLevel = function (level) {
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
    };
    OptionPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Veuillez patienter...",
        });
        this.loader.present();
    };
    OptionPage.prototype.dismiss = function () {
        var _this = this;
        this.presentLoading();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
            _this.hideLoading();
        }, 2000);
    };
    OptionPage.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    OptionPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    OptionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    OptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-option',template:/*ion-inline-start:"C:\Developpeur\Front-End\quizzMaster\src\pages\option\option.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n        <button ion-button icon-only (click)="dismissModal()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-title>\n\n      Option\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--<ion-content>\n\n  <ion-list>\n\n        <ion-item>\n\n          <ion-label>Manga</ion-label>\n\n          <ion-select [(ngModel)]="rml" [disabled]="connectivityFlag" (ionChange)="switchManga(rml)" cancelText="quitter" okText="valider">\n\n            <ion-option name="test" *ngFor="let rml of resultMangaList" [value]="rml.title" [selected]="rml.title == \'Naruto\'">{{rml.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n            <ion-label>Niveau</ion-label>\n\n              <ion-select [(ngModel)]="sl" (ionChange)="switchLevel(sl)"  cancelText="quitter" okText="valider">\n\n                 <ion-option *ngFor="let sl of resultSelectLevel"  [value]="sl.level"      [selected]="sl.level == \'Facile\'"> {{sl.level}}</ion-option>\n\n             </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>-->\n\n\n\n<ion-content>\n\n<form [formGroup]="option">\n\n  <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Sélectionne le manga<span> *</span></ion-label>\n\n            <ion-select formControlName="Mangas" (ionChange)="switchManga(rml)" okText="sélectionner" cancelText="annuler">\n\n                <ion-option *ngFor="let rml of resultMangaList" [value]="rml.title"       >{{rml.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Sélectionne le niveau<span> *</span></ion-label>\n\n              <ion-select formControlName="Level" (ionChange)="switchLevel(sl)" okText="sélectionner" cancelText="annuler">\n\n                 <ion-option *ngFor="let sl of resultSelectLevel" [value]="sl.level"      > {{sl.level}}</ion-option>\n\n             </ion-select>\n\n        </ion-item>\n\n   </ion-list>\n\n</form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n         <button class="btn" ion-button large full type="submit" [disabled]="!option.valid" (click)="dismiss()">Valider</button> \n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Developpeur\Front-End\quizzMaster\src\pages\option\option.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__domain_service_quizzService__["a" /* QuizzService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__domain_service_mangaListService__["a" /* MangaListService */],
            __WEBPACK_IMPORTED_MODULE_4__domain_service_selectLevelService__["a" /* SelectLevelService */],
            __WEBPACK_IMPORTED_MODULE_6__domain_service_apiUrlsService__["a" /* ApiUrlsService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */]])
    ], OptionPage);
    return OptionPage;
}());

//# sourceMappingURL=option.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLevelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectLevelService = /** @class */ (function () {
    function SelectLevelService(http) {
        this.http = http;
    }
    SelectLevelService.prototype.getSelectLevel = function () {
        return this.http.get("https://api.myjson.com/bins/iay9q")
            .map(function (result) {
            var resultSelectLevel;
            resultSelectLevel = result.json().selectLevel;
            return resultSelectLevel;
        });
    };
    SelectLevelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SelectLevelService);
    return SelectLevelService;
}());

//# sourceMappingURL=selectLevelService.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_service_quizzService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scoreFinale_scoreFinale__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizzPage = /** @class */ (function () {
    function QuizzPage(quizzService, navCtrl, modalctrl, alertCtrl, viewCtrl, loadingCtrl) {
        this.quizzService = quizzService;
        this.navCtrl = navCtrl;
        this.modalctrl = modalctrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.response = true;
        this.trueStatus = false;
        this.falseStatus = false;
        this.i = 0;
        this.flag = true;
        this.flagPastQuestion = false;
        this.timeOutResponse = false;
        this.stroke = 10;
    }
    QuizzPage.prototype.ngOnInit = function () {
        var _this = this;
        this.score = 0;
        this.flagJoker = false;
        this.resultNumberLife = this.getNumberLife();
        this.resultDisplayLife = this.getDisplayLife(this.resultNumberLife);
        this.resultJokerNumber = this.getJokerNumber();
        this.resultDisplayJoker = this.getDisplayJoker(this.resultJokerNumber);
        this.resultNumberQuestion = this.getNumberQuestion();
        this.randomNumbers = this.getRandomNumber(this.resultNumberQuestion);
        this.quizzService.quizzContainer.filter(function (row) {
            row.quizz.filter(function (subRow) {
                return subRow.id == _this.randomNumbers[_this.i];
            }).map(function (result) { return _this.quizzResult = result; });
        });
        this.quizzService.quizzContainer.filter(function (row) {
            _this.displayQuizz = row;
        });
        this.getStartTimer();
    };
    QuizzPage.prototype.getRandomNumber = function (nq) {
        var temp = 0;
        var numberTab = new Array(nq);
        numberTab[0] = Math.floor(Math.random() * Math.floor(nq));
        for (var i = 0; i < numberTab.length; i++) {
            temp = Math.floor(Math.random() * Math.floor(nq));
            for (var j = 0; j < numberTab.length; j++) {
                if (temp != numberTab[j]) {
                    this.flag = true;
                }
                else {
                    this.flag = false;
                    break;
                }
            }
            if (this.flag === true) {
                numberTab[i] = temp;
            }
            else {
                i--;
            }
        }
        return numberTab;
    };
    QuizzPage.prototype.getNumberQuestion = function () {
        var _this = this;
        this.quizzService.quizzContainer.filter(function (row) {
            _this.numberQuestion = row.numberQuestion;
        });
        return this.numberQuestion;
    };
    QuizzPage.prototype.getDisplayLife = function (indexLife) {
        var _this = this;
        this.quizzService.quizzContainer.filter(function (row) {
            _this.lifeTab = row.lifeTab;
            _this.resultRemoveLife = _this.lifeTab.slice(0, indexLife);
        });
        return this.resultRemoveLife;
    };
    QuizzPage.prototype.getDisplayJoker = function (indexJoker) {
        var _this = this;
        this.quizzService.quizzContainer.filter(function (row) {
            _this.jokerTab = row.jokerTab;
            _this.resultJokerRemove = _this.jokerTab.slice(0, indexJoker);
        });
        return this.resultJokerRemove;
    };
    QuizzPage.prototype.getNumberLife = function () {
        var _this = this;
        this.quizzService.quizzContainer.filter(function (row) {
            _this.lifeNumber = row.lifes;
        });
        return this.lifeNumber;
    };
    QuizzPage.prototype.getJokerNumber = function () {
        var _this = this;
        this.quizzService.quizzContainer.filter(function (row) {
            _this.jokerNumber = row.jokers;
        });
        return this.jokerNumber;
    };
    QuizzPage.prototype.getArrayTimer = function () {
        var _this = this;
        this.quizzService.quizzContainer.filter(function (row) {
            _this.arrayCurrentTimer = row.timer;
        });
        return this.arrayCurrentTimer;
    };
    QuizzPage.prototype.getCurrentCountDown = function () {
        var _this = this;
        if (this.started != false) {
            this.quizzService.quizzContainer.filter(function (row) {
                row.timer.filter(function (subRow) {
                    if (subRow.currentTimer > 0) {
                        _this.started = !subRow.startedTimer;
                        _this.currentTimerResult = subRow.currentTimer--;
                        _this.timeOut();
                    }
                    else {
                        _this.timeOutResponse = !_this.timeOutResponse;
                        _this.resultNumberLife = _this.resultNumberLife - 1;
                        _this.resultDisplayLife = _this.getDisplayLife(_this.resultNumberLife);
                        _this.gameOver(_this.resultNumberLife, _this.score);
                    }
                });
            });
            return this.currentTimerResult;
        }
    };
    QuizzPage.prototype.getResetTimer = function () {
        this.quizzService.quizzContainer.filter(function (row) {
            row.timer.filter(function (subRow) {
                if (subRow.currentTimer || subRow.currentTimer === 0) {
                    subRow.currentTimer = subRow.resetTimer;
                }
            });
        });
    };
    QuizzPage.prototype.timeOut = function () {
        var _this = this;
        var timeOut = null;
        timeOut = setTimeout(function () {
            _this.getCurrentCountDown();
        }, 800);
    };
    QuizzPage.prototype.getStartTimer = function () {
        this.started = true;
        this.timeOut();
    };
    QuizzPage.prototype.pause = function () {
        if (this.started == true) {
            this.started = false;
        }
    };
    QuizzPage.prototype.getFormatTimer = function (input, units) {
        if (input == 0) {
            return 0;
        }
        else {
            var duration = __WEBPACK_IMPORTED_MODULE_4_moment___default()().startOf('day').add(input, units);
            var format = "";
            if (duration.hour() > 0) {
                format += "H[h]";
            }
            if (duration.minute() > 0) {
                format += "m[min]";
            }
            if (duration.second() > 0) {
                format += "s[s]";
            }
            return duration.format(format);
        }
    };
    ;
    QuizzPage.prototype.trueResponse = function (currentId) {
        var number = this.randomNumbers[this.i];
        if (currentId == number && this.quizzResult.response == this.response) {
            this.trueStatus = !this.trueStatus;
            this.pause();
            if (this.flagJoker == true) {
                this.score = this.score + 0.5;
            }
            else {
                this.score = this.score + 1;
            }
            this.flagJoker = false;
        }
        else {
            this.falseStatus = !this.falseStatus;
            this.resultNumberLife = this.resultNumberLife - 1;
            this.resultDisplayLife = this.getDisplayLife(this.resultNumberLife);
            this.gameOver(this.resultNumberLife, this.score);
            this.flagJoker = false;
            this.pause();
        }
    };
    QuizzPage.prototype.falseResponse = function (currentId) {
        var number = this.randomNumbers[this.i];
        if (currentId == number && this.quizzResult.response != this.response) {
            this.trueStatus = !this.trueStatus;
            this.pause();
            if (this.flagJoker == true) {
                this.score = this.score + 0.5;
            }
            else {
                this.score = this.score + 1;
            }
            this.flagJoker = false;
        }
        else {
            this.falseStatus = !this.falseStatus;
            this.resultNumberLife = this.resultNumberLife - 1;
            this.resultDisplayLife = this.getDisplayLife(this.resultNumberLife);
            this.gameOver(this.resultNumberLife, this.score);
            this.flagJoker = false;
            this.pause();
        }
    };
    QuizzPage.prototype.getGoodResponse = function (currentId) {
        this.quizzService.quizzContainer.filter(function (row) {
            row.quizz.filter(function (subRow) {
                if (subRow.id == currentId) {
                    return subRow.rightAnswer;
                }
            });
        });
    };
    QuizzPage.prototype.getNextQuestion = function () {
        var _this = this;
        this.pause();
        this.presentLoadingCustom();
        setTimeout(function () {
            _this.i = _this.i + 1;
            _this.finalScore(_this.i, _this.score);
            var nextRandomNumber = _this.randomNumbers[_this.i];
            _this.quizzService.quizzContainer.filter(function (row) {
                row.quizz.filter(function (subRow) {
                    return subRow.id == nextRandomNumber;
                }).map(function (result) { return _this.quizzResult = result; });
            });
            _this.trueStatus = false;
            _this.falseStatus = false;
            _this.timeOutResponse = false;
            _this.flagJoker = false;
            if (_this.i != 10) {
                _this.getResetTimer();
                _this.getStartTimer();
            }
            _this.loader.dismiss();
        }, 500);
    };
    QuizzPage.prototype.presentLoadingCustom = function () {
        this.loader = this.loadingCtrl.create({
            content: '',
            spinner: 'dots',
            cssClass: 'my-loading-class'
        });
        this.loader.present();
    };
    QuizzPage.prototype.finalScore = function (position, finalScore) {
        if (position == 10) {
            this.pause();
            var modal = this.modalctrl.create(__WEBPACK_IMPORTED_MODULE_3__scoreFinale_scoreFinale__["a" /* ScoreFinalePage */], { score: finalScore });
            modal.present();
        }
    };
    QuizzPage.prototype.gameOver = function (lifePoint, result) {
        if (lifePoint == 0) {
            this.pause();
            var modal = this.modalctrl.create(__WEBPACK_IMPORTED_MODULE_3__scoreFinale_scoreFinale__["a" /* ScoreFinalePage */], { score: result });
            modal.present();
        }
    };
    QuizzPage.prototype.jokerResponse = function () {
        var _this = this;
        if (this.resultJokerNumber != 0) {
            this.flagJoker = true;
            this.quizzService.quizzContainer.filter(function (row) {
                row.quizz.filter(function (subRow) {
                    subRow.id == _this.randomNumbers;
                }).map(function (result) { return _this.quizzResult = result; });
            });
            this.resultJokerNumber = this.resultJokerNumber - 1;
            this.resultDisplayJoker = this.getDisplayJoker(this.resultJokerNumber);
        }
    };
    QuizzPage.prototype.pastQuestion = function () {
        var _this = this;
        this.flagPastQuestion = true;
        var alert = this.alertCtrl.create({
            title: 'Passer la question',
            message: 'Passer à la question suivante ou prendre un joker? Utiliser un joker par question',
            buttons: [
                {
                    text: 'Quitter',
                    handler: function () { }
                },
                {
                    text: 'Passer',
                    handler: function () { return _this.getNextQuestion(); }
                },
                {
                    text: 'Joker',
                    handler: function () { return _this.jokerResponse(); }
                }
            ]
        });
        alert.present();
    };
    QuizzPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.pause();
    };
    QuizzPage.prototype.dismissModal = function () {
        var _this = this;
        this.flagPastQuestion = true;
        var alert = this.alertCtrl.create({
            title: 'Retour au menu principale',
            message: 'Voulez-vous vraiment quitter ce quizz?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () { }
                },
                {
                    text: 'Oui',
                    handler: function () { return _this.dismiss(); }
                },
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], QuizzPage.prototype, "nav", void 0);
    QuizzPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quizz',template:/*ion-inline-start:"C:\Developpeur\Front-End\quizzMaster\src\pages\quizz\quizz.html"*/'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">\n\n<ion-header *ngIf="displayQuizz">\n\n    <ion-navbar>\n\n     <ion-buttons end>\n\n        <button ion-button icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="dismissModal()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title class="title">Quizz {{displayQuizz.name}}({{displayQuizz.level}})</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngIf="quizzResult">\n\n <div class="fullScreen">\n\n    <div class="displayQuizz">\n\n      <div class="scoreAndLife"><strong>Score:<span> {{score}}/10</span></strong></div>\n\n        <div class="scoreAndLife">\n\n          <div class="joker">\n\n            <div *ngFor="let rdk of resultDisplayJoker"><img src="{{rdk.jokerImg}}"></div>\n\n          </div>\n\n         <div class="progress-timer" *ngFor="let act of getArrayTimer()"> \n\n           <div class="timer">\n\n             {{getFormatTimer(act.currentTimer,\'s\')}}\n\n           </div>\n\n           <round-progress [current]="act.currentTimer" [max]="act.resetTimer" [color]="\'#45ccce\'" [radius]="70" [stroke]="stroke"  [rounded]="true" [responsive]="false" [animation]="\'easeOutCubic\'" [animationDelay]="0" ></round-progress>\n\n          </div>\n\n         </div>\n\n        <div class="scoreAndLife">\n\n    Vie: <span *ngFor="let rdl of resultDisplayLife">\n\n           <i class="{{rdl.lifeIcon}}" aria-hidden="true"></i>\n\n        </span>\n\n      </div>\n\n    </div>\n\n    <div class="displayQuizz">\n\n      <div class="textResponse">\n\n             <strong><p class="trt" *ngIf="trueStatus">{{quizzResult.textResponseTrue}}</p></strong>\n\n             <strong><p class="trf" *ngIf="falseStatus">{{quizzResult.textResponseFalse}}</p></strong>\n\n             <strong><p class="trf" *ngIf="timeOutResponse">Temps écoulé!!</p></strong>\n\n        </div>\n\n         <div class="question">\n\n              <strong><p>{{quizzResult.question}}</p></strong>\n\n              \n\n              <img  class="boolPic" *ngIf="trueStatus" src="{{quizzResult.truePicture}}" alt="">\n\n              <img  class="boolPic" id="pictureSize" *ngIf="falseStatus" src="{{quizzResult.falsePicture}}" alt="">\n\n         </div>\n\n        <div class="next-button">\n\n             <button *ngIf="trueStatus || falseStatus || timeOutResponse"  ion-button full (click)="getNextQuestion()">Suivant</button>\n\n\n\n        </div>\n\n        <div class="rightAnswer">\n\n          <p class="trf" *ngIf="falseStatus || timeOutResponse">{{quizzResult.rightAnswer}}</p>\n\n        </div>\n\n        <div class="jokerText">\n\n            <p *ngIf="flagJoker">{{quizzResult.jokerResponse}}</p>\n\n        </div>\n\n    </div>\n\n</div>  \n\n</ion-content>\n\n<ion-footer *ngIf="quizzResult">\n\n  <ion-toolbar>    \n\n      <div class="group-button">          \n\n        <button class="btnTrue" [disabled]="trueStatus || falseStatus || timeOutResponse" ion-button large (click)="trueResponse(quizzResult.id)">Vrai </button>\n\n        <button class="past" [disabled]="trueStatus || falseStatus || timeOutResponse" ion-button large (click)="pastQuestion()">Passer</button>\n\n        <button class="btnFalse" [disabled]="trueStatus || falseStatus || timeOutResponse" name="false" ion-button large (click)="falseResponse(quizzResult.id)">Faux</button>    \n\n    </div>   \n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Developpeur\Front-End\quizzMaster\src\pages\quizz\quizz.html"*/,
            styleUrls: ['/quizz.scss']
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__domain_service_quizzService__["a" /* QuizzService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__domain_service_quizzService__["a" /* QuizzService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _g || Object])
    ], QuizzPage);
    return QuizzPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=quizz.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_scoreFinale_scoreFinale__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quizz_quizz__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_option_option__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__domain_service_quizzService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__domain_service_mangaListService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__domain_service_apiUrlsService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__domain_service_selectLevelService__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quizz_quizz__["a" /* QuizzPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_option_option__["a" /* OptionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_scoreFinale_scoreFinale__["a" /* ScoreFinalePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quizz_quizz__["a" /* QuizzPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_option_option__["a" /* OptionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_scoreFinale_scoreFinale__["a" /* ScoreFinalePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__domain_service_quizzService__["a" /* QuizzService */],
                __WEBPACK_IMPORTED_MODULE_12__domain_service_mangaListService__["a" /* MangaListService */],
                __WEBPACK_IMPORTED_MODULE_13__domain_service_apiUrlsService__["a" /* ApiUrlsService */],
                __WEBPACK_IMPORTED_MODULE_14__domain_service_selectLevelService__["a" /* SelectLevelService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 205,
	"./af.js": 205,
	"./ar": 206,
	"./ar-dz": 207,
	"./ar-dz.js": 207,
	"./ar-kw": 208,
	"./ar-kw.js": 208,
	"./ar-ly": 209,
	"./ar-ly.js": 209,
	"./ar-ma": 210,
	"./ar-ma.js": 210,
	"./ar-sa": 211,
	"./ar-sa.js": 211,
	"./ar-tn": 212,
	"./ar-tn.js": 212,
	"./ar.js": 206,
	"./az": 213,
	"./az.js": 213,
	"./be": 214,
	"./be.js": 214,
	"./bg": 215,
	"./bg.js": 215,
	"./bm": 216,
	"./bm.js": 216,
	"./bn": 217,
	"./bn.js": 217,
	"./bo": 218,
	"./bo.js": 218,
	"./br": 219,
	"./br.js": 219,
	"./bs": 220,
	"./bs.js": 220,
	"./ca": 221,
	"./ca.js": 221,
	"./cs": 222,
	"./cs.js": 222,
	"./cv": 223,
	"./cv.js": 223,
	"./cy": 224,
	"./cy.js": 224,
	"./da": 225,
	"./da.js": 225,
	"./de": 226,
	"./de-at": 227,
	"./de-at.js": 227,
	"./de-ch": 228,
	"./de-ch.js": 228,
	"./de.js": 226,
	"./dv": 229,
	"./dv.js": 229,
	"./el": 230,
	"./el.js": 230,
	"./en-SG": 231,
	"./en-SG.js": 231,
	"./en-au": 232,
	"./en-au.js": 232,
	"./en-ca": 233,
	"./en-ca.js": 233,
	"./en-gb": 234,
	"./en-gb.js": 234,
	"./en-ie": 235,
	"./en-ie.js": 235,
	"./en-il": 236,
	"./en-il.js": 236,
	"./en-nz": 237,
	"./en-nz.js": 237,
	"./eo": 238,
	"./eo.js": 238,
	"./es": 239,
	"./es-do": 240,
	"./es-do.js": 240,
	"./es-us": 241,
	"./es-us.js": 241,
	"./es.js": 239,
	"./et": 242,
	"./et.js": 242,
	"./eu": 243,
	"./eu.js": 243,
	"./fa": 244,
	"./fa.js": 244,
	"./fi": 245,
	"./fi.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./ga": 251,
	"./ga.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it-ch": 264,
	"./it-ch.js": 264,
	"./it.js": 263,
	"./ja": 265,
	"./ja.js": 265,
	"./jv": 266,
	"./jv.js": 266,
	"./ka": 267,
	"./ka.js": 267,
	"./kk": 268,
	"./kk.js": 268,
	"./km": 269,
	"./km.js": 269,
	"./kn": 270,
	"./kn.js": 270,
	"./ko": 271,
	"./ko.js": 271,
	"./ku": 272,
	"./ku.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mn": 282,
	"./mn.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./mt": 286,
	"./mt.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./tg": 313,
	"./tg.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./ug-cn": 321,
	"./ug-cn.js": 321,
	"./uk": 322,
	"./uk.js": 322,
	"./ur": 323,
	"./ur.js": 323,
	"./uz": 324,
	"./uz-latn": 325,
	"./uz-latn.js": 325,
	"./uz.js": 324,
	"./vi": 326,
	"./vi.js": 326,
	"./x-pseudo": 327,
	"./x-pseudo.js": 327,
	"./yo": 328,
	"./yo.js": 328,
	"./zh-cn": 329,
	"./zh-cn.js": 329,
	"./zh-hk": 330,
	"./zh-hk.js": 330,
	"./zh-tw": 331,
	"./zh-tw.js": 331
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 409;

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Developpeur\Front-End\quizzMaster\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Developpeur\Front-End\quizzMaster\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrlsService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizzService = /** @class */ (function () {
    function QuizzService(http, apiUrlsService) {
        this.http = http;
        this.apiUrlsService = apiUrlsService;
        this.quizzContainer = [];
        this.newResultQuizz = [];
        this.resultQuizz = [];
        this.url = "https://api.myjson.com/bins/djse8";
        this._name = '<no name set>';
    }
    QuizzService.prototype.getAllQuizzDefault = function () {
        return this.http.get(this.url)
            .map(function (result) {
            var quizz;
            quizz = result.json().quizz;
            return quizz;
        });
    };
    QuizzService.prototype.setNameManga = function (name) {
        var _this = this;
        console.log(name);
        this.apiUrlsService.getApi(name)
            .subscribe(function (apiNaruto) {
            apiNaruto.filter(function (row) { return row.name === name; }).map(function (result) { return _this.resultApiNaruto = result; });
            _this.apiResult = _this.resultApiNaruto.api;
            _this.setCallApi(_this.apiResult);
            _this.getCallApi();
            _this.getAllQuizz();
            _this.getQuizz();
        });
        return this.apiResult;
    };
    QuizzService.prototype.setCallApi = function (api) {
        this.apiManga = api;
    };
    QuizzService.prototype.getCallApi = function () {
        return this.apiManga;
    };
    QuizzService.prototype.getAllQuizz = function () {
        return this.http.get(this.getCallApi())
            .map(function (result) {
            var quizz;
            quizz = result.json().quizz;
            return quizz;
        });
    };
    QuizzService.prototype.getQuizz = function () {
        var _this = this;
        this.getAllQuizz()
            .subscribe(function (resQuizz) {
            _this.newResultQuizz = _this.setRemoveResultQuizz(resQuizz);
        });
        console.log(this.newResultQuizz);
        return this.newResultQuizz;
    };
    QuizzService.prototype.getRemoveQuizz = function () {
        var remove = this.quizzContainer.length;
        if (remove >= 1) {
            return this.quizzContainer.splice(0);
        }
        else {
            return this.quizzContainer;
        }
    };
    QuizzService.prototype.setRemoveResultQuizz = function (result) {
        var remove = result.length;
        if (remove >= 1) {
            return result.splice(0);
        }
        else {
            return result;
        }
    };
    QuizzService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__apiUrlsService__["a" /* ApiUrlsService */]])
    ], QuizzService);
    return QuizzService;
}());

//# sourceMappingURL=quizzService.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiUrlsService = /** @class */ (function () {
    function ApiUrlsService(http) {
        this.http = http;
        this.arrayApiUrls = [];
    }
    ApiUrlsService.prototype.ngOnInit = function () {
    };
    ApiUrlsService.prototype.getApi = function (name) {
        return this.http.get("https://api.myjson.com/bins/c9a0g")
            .map(function (result) {
            var api;
            api = result.json().apiUrls;
            return api;
        });
    };
    ApiUrlsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiUrlsService);
    return ApiUrlsService;
}());

//# sourceMappingURL=apiUrlsService.js.map

/***/ })

},[332]);
//# sourceMappingURL=main.js.map