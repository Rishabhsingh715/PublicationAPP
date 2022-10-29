import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.css']
})
export class AddResourcesComponent implements OnInit {

  selectedResource='1';
  scholarForms!: FormGroup ;
  deptForms!: FormGroup ;
  jorForms!: FormGroup ;
  confForms!: FormGroup ;

  constructor(
    private appService: AppService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForms();
    this.toastr.info("Select a resource from dropdown to add");
  }

  changedResource(){
    console.log(this.selectedResource,' is the selectd value');
    
  }

  facultyForms!: FormGroup;
  
  createForms(){

    this.facultyForms = new FormGroup({
      fac_id: new FormControl('', [Validators.required]),
      fac_name: new FormControl(''),
      dept_id: new FormControl(''),
      password: new FormControl('')
    });

    this.scholarForms = new FormGroup({
      roll_no: new FormControl('', [Validators.required]),
      name: new FormControl(''),
      dept_id: new FormControl(''),
      password: new FormControl('')
    })
    this.deptForms = new FormGroup({
      dept_id: new FormControl(''),
      dept_name: new FormControl('')
    })
    this.jorForms = new FormGroup({
      jour_id: new FormControl(''),
      jour_name: new FormControl('')
    })
    this.confForms = new FormGroup({
      conf_id: new FormControl(''),
      conf_name: new FormControl('')
    })

  }

  submitConf(){
    console.log(this.confForms.getRawValue(),
      'conf forms');
    let payload = this.confForms.value;
    this.toastr.success("Conferences added");

    this.confForms.reset();
    this.appService.saveConference(payload).subscribe((res: any)=>{
    });  
    
  }

  submitJor(){
    console.log(this.jorForms.value,'jor');
    
    let payload = this.jorForms.value;
    this.toastr.success("Journal added");

    this.jorForms.reset();
    this.appService.saveJournal(payload).subscribe((res: any)=>{
    });
  }

  submitDept(){
    console.log(this.deptForms.value,'dept');
    
    let payload = this.deptForms.value;
    this.toastr.success("Department added");

    this.deptForms.reset();
    this.appService.saveDepartment(payload).subscribe((res: any)=>{
    });
  }

  submitScholar(){
    console.log(this.scholarForms.value,'scholarforms');
    
    let payload = this.scholarForms.value;
    this.toastr.success("Scholar added");

    this.scholarForms.reset();
    this.appService.saveScholar(payload).subscribe((res: any)=>{
    });
  }

  submitFaculty(){
    console.log(this.facultyForms.value,'faculty forms');
    
    let payload = this.facultyForms.value;
    this.toastr.success("Faculty added");

    this.facultyForms.reset();
    this.appService.saveFaculty(payload).subscribe((res: any)=>{
    });
  }

}
