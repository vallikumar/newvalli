import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import { Observable } from '@angular/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReporterListService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data)

    });
}

public getJSON() {
  return this.http.get("assets/reporter.json")
}
// getReporters(){
//   return this.http.get("assets/reporter.json")
// }
}