import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServicesService {

  constructor() { }

  getItem(key){
    return JSON.parse(localStorage.getItem(key));
  }
  
  setItem(key, item){
    localStorage.setItem(key, JSON.stringify(item));
  }
}
