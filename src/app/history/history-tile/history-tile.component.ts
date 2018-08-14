import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HistoryService } from '../../services/history.service'


@Component({
  selector: 'app-history-tile',
  templateUrl: './history-tile.component.html',
  styleUrls: ['./history-tile.component.css']
})
export class HistoryTileComponent implements OnInit {
  @Input() message:string;
  private display = true;
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
  }
  removeHistory(history){
    this.historyService.removeHisotry(history);
    this.display = false;  
  }
}
