import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  //@Input() props:{likesCount:number;isActive:boolean}
  @Input() likesCount:number;
  @Input() isActive:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isActive=!this.isActive;
    if(this.isActive===false){
      this.likesCount++
    }else{
      this.likesCount--
    }
  }

}
