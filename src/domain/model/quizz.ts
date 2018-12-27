import { Life } from "../model/life";
import { Joker } from "./joker";

export class Quizz {
    quizz: Array<Quizz>
    id: number;
    question: string;
    picture: string;
    response: boolean;
    truePicture: string;
    falsePicture: string;
    jokerResponse: string;
    level: string
    numberQuestion: number;
    lifeTab: Array<Life>
    lifes: number;
    lifePicture: string;
    jokerTab: Array<Joker>;
    jokers: number;
    easy: Array<Quizz>;
    medium: Array<Quizz>;
    hard: Array<Quizz>;
}