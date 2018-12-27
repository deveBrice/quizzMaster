import { Theme } from '../../../domain/model/theme';
import { Observable } from 'rxjs/Observable';

export interface IThemeRepository {
    findAllTheme(): Observable<Array<Theme>>;
}