import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoresManagerService {
http = inject(HttpClient);
  constructor() { }

  getAllStores(){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    }
    let url = "http://localhost:8080/api/storesystem/getAllStores";
    return this.http.get(url ,options);
  }

  saveStore(store: any){
    store.storeName = "Walmart";
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    }
    console.log('store valurs: ', store);
    let url = "http://localhost:8080/api/storesystem/savestore";
    return this.http.post(url ,options, store);
  }
}
