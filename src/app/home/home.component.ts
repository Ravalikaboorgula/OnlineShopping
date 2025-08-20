import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoresManagerService } from '../store-manager.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Store } from '../Store';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, TableModule, ButtonModule, CommonModule, Dialog],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StoresManagerService]
})
export class HomeComponent implements OnInit {
  service = inject(StoresManagerService);
  appTitle: string = "";
  appRunning: any = [];
  displayedColumns = ['storeName', 'streetName', 'city', 'state', 'zipCode', 'email', 'branch', 'storeHours'];

  applyForm = new FormGroup({
    storeId: new FormControl(0),
    storeName: new FormControl('', Validators.required),
    streetName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    email: new FormControl(''),
    branch: new FormControl(''),
    storeHours: new FormControl('')
  });
  dataSource: any;
  formSubmitted: boolean = false;
  visible: boolean = false;
  mode!: string;

  constructor() {

  }

  //This method gets called when the page loads
  ngOnInit() {
    this.getAllStore();
  }

  getAllStore() {
    this.service.getAllStores().subscribe({
      next: (response: any) => {
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
      }
    })
  }

  saveStoreDetails() {
    
    if(this.applyForm.invalid){
      this.formSubmitted = true;
      return;
    }
    let saveStore: Store;
    let saveData = this.applyForm.value;
    if(this.mode == 'A'){
    saveStore = new Store(0,saveData.storeName!, saveData.streetName!, saveData.city!
      , saveData.state!, saveData.zipCode!, saveData.email!, saveData.branch!, saveData.storeHours!);
    }
    else{
      saveStore = new Store(saveData.storeId!,saveData.storeName!, saveData.streetName!, saveData.city!
        , saveData.state!, saveData.zipCode!, saveData.email!, saveData.branch!, saveData.storeHours!);
  
    }
    this.appRunning = this.service.saveStore(saveStore).subscribe({

      next: (response: any) => {
        this.dataSource = response;
        this.visible = false;
      }
    });
    //this.reloadPage();
  }

  showDialog(){
    this.visible = true;
    this.mode = 'A';
    this.applyForm = new FormGroup({
      storeId: new FormControl(0),
      storeName: new FormControl('', Validators.required),
      streetName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      email: new FormControl(''),
      branch: new FormControl(''),
      storeHours: new FormControl('')
    });
  }

  deleteStore(storeId:number){
    this.service.deleteStore(storeId).subscribe(
      () => {
        console.log(`Item with ID ${storeId} deleted successfully.`);
        // Optionally, refresh the list of items or update UI
      },
      (      error: any) => {
        console.error('Error deleting item:', error);
      },
    );
    //this.reloadPage();
  }

  cancelEvent(){
    this.visible= false;
  }

  editStoredetails(storeId:number){
    this.visible = true;
    this.mode = 'M';
    this.service.getStoreById(storeId).subscribe({
      next: (response: any) => {
        const data = response;
        if(data){
          this.applyForm.patchValue(data);
        }
      }
    }); 
  }

  reloadPage(){
    window.location.reload();
  }

}
