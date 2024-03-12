import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(){
    this.firstClick();
  }
  title = 'Melissa Online Shopping Center';
  count = 1;
  firstClick(){
    this.count++;
    console.log('hello ',this.count);
  }
}
