export interface Quizz {
    id: number;
    question: string;
    picture: string;
    response: boolean;
    rightAnswer: string;
    truePicture: string;
    falsePicture: string;
    textResponseTrue: string;
    textResponseFalse: String;
    jokerResponse: string;
  }