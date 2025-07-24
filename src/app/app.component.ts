import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TableModule],
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
