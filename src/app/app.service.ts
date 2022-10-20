import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getFaculty() {
    return this.http.get('http://localhost:3000/api/faculty/all');
  }
  getScholar() {
    return this.http.get('http://localhost:3000/api/research/all');
  }
  getDepartment() {
    return this.http.get('http://localhost:3000/api/department/all');
  }
  getConference() {
    return this.http.get('http://localhost:3000/api/conference/all');
  }
  getJournal() {
    return this.http.get('http://localhost:3000/api/journal/all');
  }
  constructor(
    private http: HttpClient
  ) { }

  getList(){
    return this.http.get('http://localhost:3000/api/publication/all');
  }

  saveFaculty(payload: any){

    return this.http.post('http://localhost:3000/api/faculty/add',payload);
  }
  saveScholar(payload: any){

    return this.http.post('http://localhost:3000/api/research/add',payload);
  }
  saveDepartment(payload: any){

    return this.http.post('http://localhost:3000/api/department/add',payload);
  }
  saveJournal(payload: any){

    return this.http.post('http://localhost:3000/api/journal/add',payload);
  }
  saveConference(payload: any){

    return this.http.post('http://localhost:3000/api/conference/add',payload);
  }
  savePublication(payload: any){

    return this.http.post('http://localhost:3000/api/publication/add',payload);
  }
}