import { Theme } from "../../../domain/model/theme";
import { IThemeRepository } from "../contract/iThemeRepository";

import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export class ThemeHttpProxy implements IThemeRepository {
    constructor(private http: Http){}
    findAllTheme(): Observable<Array<Theme>>{
        return this.http.get("assets/api/theme.json")
        .map((result)=>{
            let themes: Array<Theme>;
            themes = result.json().theme.mangas;
            return themes;
        })
    }
}