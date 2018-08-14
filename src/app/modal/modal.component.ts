import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

//need to delete this service only for check
import { HistoryService } from '../services/history.service'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() data : any;
  @Input() modal : string;
  closeResult: string;
  dataObj = {};

  constructor(private modalService: NgbModal , private historyService : HistoryService) {}
  ngOnInit(){
    switch(this.modal){
      case 'weather' :
          this.dataObj = {
            title : `the weather in ${this.data.name}, ${this.data.sys.country}`,
            button : this.data.name,
            body : `The weather is currently ${this.data.main.temp/10}.	
                    Max temp will stand on ${this.data.main.temp_max/10} & the min will be ${this.data.main.temp_max/10}.
                    Humidity: ${this.data.main.humidity}.`
          }
    }

  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  saveHisotry(str){
    this.historyService.addHistory(str);
  }
  

}
