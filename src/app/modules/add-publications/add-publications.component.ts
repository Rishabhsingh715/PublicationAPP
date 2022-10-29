import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AppService} from '../../app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-publications',
  templateUrl: './add-publications.component.html',
  styleUrls: ['./add-publications.component.css']
})
export class AddPublicationsComponent implements OnInit {
  publicationForm!: FormGroup;
  facultyList:any = [];
  departmentList:any = [];
  conferenceList:any = [];
  journalList:any = [];
  scholarList: any=[];


  constructor(
    private appService: AppService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.getFaculty();
    this.getScholar();
    this.getDepartment();
    this.getConference();
    this.getJournal();
    this.toastr.warning('Select the details and add the paper')
  }
  getFaculty() {
    
    this.appService.getFaculty().subscribe((res: any)=>{
      this.facultyList = res;
    })
  }
  getScholar() {
     this.appService.getScholar().subscribe((res: any)=>{
      this.scholarList = res;
    })
  }
  getDepartment() {
     this.appService.getDepartment().subscribe((res: any)=>{
      this.departmentList = res;
    })
  }
  getConference() {
     this.appService.getConference().subscribe((res: any)=>{
      this.conferenceList = res;
    })
  }
  getJournal() {
     this.appService.getJournal().subscribe((res: any)=>{
      this.journalList = res;
    })
  }

  createForm(){
    this.publicationForm = new FormGroup({
      scholar: new FormControl('', [Validators.required]),
      faculity: new FormControl(''),
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
    this.publicationForm.reset();
    this.toastr.success('Publication saved successfully');
    this.appService.savePublication(payload).subscribe((res: any)=>{

    });
  }

}
