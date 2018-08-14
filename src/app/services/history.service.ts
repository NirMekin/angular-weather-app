import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private histories: string[] = [];
  private date: Date = new Date();
  constructor() {
    this.histories.push(`${this.date.getMilliseconds()} msg: TEST HISTORY`)
  }

  addHistory(history){
    this.histories.push(`${this.date.getTime()} msg: ${history}`);
  }

  historyCollection():Observable<string[]>{
    return of(this.histories);
  }

  removeHisotry(history){
    this.histories = this.histories.filter( _history => _history !== history );
    console.log(this.histories)
  }
}
