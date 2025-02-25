import { Injectable } from '@angular/core';

export interface gameResult {
  start: string
  end: string;        
  turnMatches: boolean[]    
}

const game1: gameResult = {
  start: "2022-02-14T18:55:00"
  , end: "2022-02-14T19:00:00"
  , turnMatches: [false, false, false]  
};

const game2: gameResult = {
  start: "2022-02-14T19:05:00"
  , end: "2022-02-14T19:35:00"
  , turnMatches: [true, true, true, false, true] 
};

@Injectable({
  providedIn: 'root'
})
export class CardGameService {

  constructor() { 
  }

  gameResults: gameResult[] = [
    game1
    , game2
  ];

  addGameResult = (r: gameResult) => {
    this.gameResults = [
      ...this.gameResults,
      r
    ];
  };  
}
