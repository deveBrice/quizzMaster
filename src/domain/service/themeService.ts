import { Theme } from '../model/theme';
import { IThemeRepository } from "../../infrastructure/proxy/contract/iThemeRepository";
import { Observable } from "rxjs/Observable";

export class ThemeService {
    constructor(private repository: IThemeRepository){}

    findAllTheme(): Observable<Array<Theme>>{
        return this.repository.findAllTheme();
    }
}