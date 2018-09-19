import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data)

    });
}

public getJSON() {
  return this.http.get("assets/facility.json")
}

}