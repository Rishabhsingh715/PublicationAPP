import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.css']
})
export class AddResourcesComponent implements OnInit {

  selectedResource='1';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForms();
  }

  changedResource(){
    console.log(this.selectedResource,' is the selectd value');
    
  }

  facultyForms!: FormGroup;
  
  createForms(){

    // this.facultyForms = (

    // )

  }

}
