import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { StoresManagerService } from '../store-manager.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Store } from '../Store';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, TableModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StoresManagerService]
})
export class HomeComponent implements OnInit {
  service = inject(StoresManagerService);
  appTitle: string = "";
  appRunning: any = [];
  displayedColumns = ['storeId', 'streetName', 'city', 'state', 'zipCode', 'email', 'branch', 'storeHours'];

  applyForm = new FormGroup({
    storeName: new FormControl(''),
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

  constructor() {

  }

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
    let saveStore: Store;
    let saveData = this.applyForm.value;

    saveStore = new Store(saveData.storeName!, saveData.streetName!, saveData.city!
      , saveData.state!, saveData.zipCode!, saveData.email!, saveData.branch!, saveData.storeHours!);
    this.appRunning = this.service.saveStore(saveStore).subscribe({

      next: (response: any) => {
        this.dataSource = response;
      }
    });
    this.getAllStore();
  }

}
