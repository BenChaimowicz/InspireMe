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

  constructor(public dataService: InspirationDataService) { }

  ngOnInit() {
    this.rdyInspirations = this.dataService.inspirationList;
    if (!(this.rdyInspirations.length < 1)) {
      this.inspiration = this.rdyInspirations[0];
    }
  }

  previous() {

  }
  next() {

  }
}
