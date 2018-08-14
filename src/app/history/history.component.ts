import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private histories : string[];
  constructor(private historyService : HistoryService) { }

  ngOnInit() {
    this.historyService.historyCollection()
    .subscribe(data => this.histories = data)
    
  }

}
