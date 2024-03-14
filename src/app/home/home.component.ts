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

  appTitle: string = "Grocery Systems";

  constructor(){

  }

  ngOnInit() {
  }

  
  saveStoreDetails(){
    console.log('hello world')
  }

  
}
