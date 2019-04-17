import { Quizz } from './quizz';
import { Life } from "../model/life";
import { Joker } from "./joker";
import { Questionnaire } from "./questionnaire";
import { Timer } from "./timer";

export interface Questionnaire {

  level: string;
  name: string;
  numberQuestion: number;
  lifes: number; 
  jokers: number;
  lifeTab: Array<Life>;
  jokerTab: Array<Joker>;
  quizz: Array<Quizz>;
  timer: Array<Timer>;
}