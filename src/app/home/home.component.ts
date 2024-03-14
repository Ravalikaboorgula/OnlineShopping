import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  
  appTitle: string = "";

  constructor(){

  }

  ngOnInit() {
  }

  
  saveStoreDetails(){
    if(this.appTitle == null || this.appTitle == '' || this.appTitle == undefined){
      console.log('appTitle cannot be empty');
      return;
    }
    console.log('hello world')
  }

  
}
