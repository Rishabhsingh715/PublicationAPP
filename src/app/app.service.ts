import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getList(){
    return this.http.get('localhost:3000/app/get-list');
  }

  saveFaculty(payload: any){

    return this.http.post('localhost:3000/app/save-faculty',payload);
  }
  saveScholar(payload: any){

    return this.http.post('localhost:3000/app/save-scholar',payload);
  }
  saveDepartment(payload: any){

    return this.http.post('localhost:3000/app/save-department',payload);
  }
  saveJournal(payload: any){

    return this.http.post('localhost:3000/app/save-journal',payload);
  }
  saveConference(payload: any){

    return this.http.post('localhost:3000/app/save-conference',payload);
  }
  savePublication(payload: any){

    return this.http.post('localhost:3000/app/save-publication',payload);
  }
}
