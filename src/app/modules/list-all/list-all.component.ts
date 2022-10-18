import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  entries: any=[];
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {

    this.getList();
  }


  getList() {
    this.appService.getList().subscribe((res: any)=>{
      console.log('is the reuslt', res);

      this.entries = res.result.list;
      
    })
  }

}
