import { InspirationDataService } from './../inspiration-data.service';
import { Inspiration } from './../inspiration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inspire-display',
  templateUrl: './inspire-display.component.html',
  styleUrls: ['./inspire-display.component.css']
})
export class InspireDisplayComponent implements OnInit {

  inspiration: Inspiration;
  rdyInspirations: Inspiration[];
  currentInspirationIndex: number;
  firstOrLast: boolean;


  constructor(public dataService: InspirationDataService) { }

  ngOnInit() {
    this.rdyInspirations = this.dataService.inspirationList;
    if (!(this.rdyInspirations.length < 1)) {
      this.inspiration = this.rdyInspirations[0];
      this.currentInspirationIndex = 0;
      this.firstOrLast = true;
    }

  }

  previous() {
    if (this.currentInspirationIndex !== 0) {
      this.currentInspirationIndex--;
      this.inspiration = this.rdyInspirations[this.currentInspirationIndex];
    } else {
      this.firstOrLast = true;
    }
  }
  next() {
    if (this.currentInspirationIndex >= this.rdyInspirations.length - 1) {
      this.firstOrLast = false;
    } else {
      this.currentInspirationIndex++;
      this.inspiration = this.rdyInspirations[this.currentInspirationIndex];
    }
  }
}
