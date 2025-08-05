import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from './Store';

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

  saveStore(store: Store){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    }
    console.log('store values: ', store);
    let url = "http://localhost:8080/api/storesystem/savestore";
    return this.http.post(url , JSON.stringify(store), options);
  }
  deleteStore(storeId: number){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    }
    //console.log('delete values: ', storeId);
    let url = "http://localhost:8080/api/storesystem/deleteStoreById?storeId="+storeId;
    return this.http.delete<Store>(url , options);
  }
}
