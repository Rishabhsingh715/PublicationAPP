import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AppService} from '../../app.service';
@Component({
  selector: 'app-add-publications',
  templateUrl: './add-publications.component.html',
  styleUrls: ['./add-publications.component.css']
})
export class AddPublicationsComponent implements OnInit {
  publicationForm!: FormGroup;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.publicationForm = new FormGroup({
      scholar: new FormControl('', [Validators.required]),
      faculty: new FormControl(''),
      department: new FormControl(''),
      journal: new FormControl(''),
      conference: new FormControl(''),
      papertitle: new FormControl(''),
      pp: new FormControl('')
    });
  }

  submitPublication(){
    let payload = this.publicationForm.value;
    console.log(payload,'publicaitons valus');

    this.appService.savePublication(payload).subscribe((res: any)=>{

    });
  }

}
