import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet ={
    body: 'Mr Gob is da best',
    isLiked:true,
    likesCount:20
  }
}
