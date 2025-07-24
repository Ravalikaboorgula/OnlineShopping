import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { StoresManagerService } from '../store-manager.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StoresManagerService]
})
export class HomeComponent implements OnInit{
  service = inject(StoresManagerService);
  appTitle: string = "";
  appRunning: any = [];
  displayedColumns = [ 'storeId', 'streetName', 'city', 'state', 'zipCode', 'email','branch', 'storeHours'];

  applyForm = new FormGroup({
    storeName: new FormControl('Beraums'),
    streetName: new FormControl(''),
    storePhone: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    email: new FormControl(''),
    branch: new FormControl(''),
    storeHours: new FormControl('')
  });
  dataSource: any;
  

  

  constructor(){

  }

  ngOnInit() {
  
    
     this.service.getAllStores().subscribe({
       next: (response: any)=> {
       this.dataSource = response.map((item: any) => ({
         storeId: item.storeId,
         storeName: item.storeName,
       streetName: item.streetName,
         city: item.city,
         state: item.state,
         zipCode: item.zipCode,
         email: item.email,
         branch: item.branch,
         storeHours: item.storeHours
       }));
      console.log('dataSource sdfds: ', this.dataSource)
      //this.appRunning = response;
    //}
    //});
   /* Observable<User[]> {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map(response => {
          // Map the raw API response to your User interface
          return response.map(item => ({
            id: item.userId, // Assuming API uses 'userId'
            name: item.userName, // Assuming API uses 'userName'
            email: item.userEmail // Assuming API uses 'userEmail'
            // ... map other properties
          }));
        })
      );
    }*/

    console.log("this.appRunning: ", this.appRunning);
  }
})
}

  
  saveStoreDetails(){
    
    this.appRunning = this.service.getAllStores().subscribe({
      next: (response: any)=> {
      this.dataSource = response;
      console.log('dataSource: ', this.dataSource)
      //this.appRunning = response;
    }
    });
  
//     if(this.applyForm.value.storeName == null ||
//        this.applyForm.value.storeName == '' ||
//        this.applyForm.value.storeName == undefined){
//       console.log('store name cannot be empty');
//     }
    
//    else if(this.applyForm.value.storeAddress == null ||
//     this.applyForm.value.storeAddress == '' ||
//     this.applyForm.value.storeAddress == undefined){
//    console.log('store address cannot be empty');
//  }
//  else if(this.applyForm.value.storePhone == null ||
//   this.applyForm.value.storePhone == '' ||
//   this.applyForm.value.storePhone == undefined){
//  console.log('store phone cannot be empty');
// }
// else{
//   console.log('store name ',this.applyForm.value.storeName);
// }
//console.log('store in component : ', this.applyForm.value.storeName);
// this.appRunning = this.service.saveStore(this.applyForm.value).subscribe({
  
//   next: (response: any)=> {
//   //this.appRunning = response;
//   this.dataSource = response;
//   console.log('this.appCo: ', this.appRunning);
// }
// });
    }

  
}
