import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  
  appTitle: string = "";

  applyForm = new FormGroup({
    storeName: new FormControl(''),
    storeAddress: new FormControl(''),
    storePhone: new FormControl(''),
    storeEmail: new FormControl(''),
    storeZipcode: new FormControl(''),
    storeBranch: new FormControl('')
  });
  

  constructor(){

  }

  ngOnInit() {
  }

  
  saveStoreDetails(){
    if(this.applyForm.value.storeName == null ||
       this.applyForm.value.storeName == '' ||
       this.applyForm.value.storeName == undefined){
      console.log('store name cannot be empty');
    }
    
   if(this.applyForm.value.storeAddress == null ||
    this.applyForm.value.storeAddress == '' ||
    this.applyForm.value.storeAddress == undefined){
   console.log('store address cannot be empty');
 }
 if(this.applyForm.value.storePhone == null ||
  this.applyForm.value.storePhone == '' ||
  this.applyForm.value.storePhone == undefined){
 console.log('store phone cannot be empty');
}
    console.log('hello world')
  }

  
}
