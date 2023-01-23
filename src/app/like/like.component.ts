import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {
  @Input('Count') Count= 0 ;
  @Input('isActive') isActive= true ;

  
onClick(){
this.Count += (this.isActive) ? -1: 1;
this.isActive=!this.isActive;

}



 

}
