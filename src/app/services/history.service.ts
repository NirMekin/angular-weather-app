import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: string[] = [];
  private date: Date = new Date();
  constructor() { }

  addHistory(history){
    this.history.push(`${this.date.getMilliseconds()} msg: ${history}`);
  }

  get historyCollection(){
    return this.history;
  }
}
