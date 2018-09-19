import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaximoHelpersService {

  constructor() { }

  // Base of Maximo API url, with trailing slash.
  // For example 'http://orsp-maxapp.ors.nih.gov/maximo/'
  getMaximoUrl()
  {
    //'http://orsp-maxapp.ors.nih.gov/maximo/'; 
    return 'https://ors-maxappstg.ors.nih.gov/maximo/';
  }

  // Array of classification IDs for water treatment
  // work orders, like WATREAT.
  // In staging, is 4433. TODO: look up production ones.
  getWaterClassifications()
  {
    return "[4433]";
  }

}
