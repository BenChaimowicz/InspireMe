import { InspirationDataService } from './../inspiration-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Inspiration } from './../inspiration';

@Component({
  selector: 'app-create-new-inspiration',
  templateUrl: './create-new-inspiration.component.html',
  styleUrls: ['./create-new-inspiration.component.css']
})
export class CreateNewInspirationComponent implements OnInit {

  form: FormGroup;
  dataService: InspirationDataService;
  userId: number = 1; // TODO: Create userID system

  constructor(fb: FormBuilder, dataService: InspirationDataService) {
    this.form = fb.group({
      name: ['', Validators.required],
      content: ['', Validators.required],
      origin: ['', Validators.required]
    });
    this.dataService = dataService;
  }

  ngOnInit() {
  }

  submitInspiration() {
    if (this.form.valid) {
      const newIns: Inspiration = new Inspiration(
        this.userId,
        this.form.value.origin,
        this.form.value.name,
        this.form.value.content
      );
      this.dataService.inspirationList.push(newIns);
    }
    console.log(this.dataService.inspirationList);
  }

}
