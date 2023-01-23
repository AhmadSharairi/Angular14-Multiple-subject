import { Component, OnInit, NgModule } from '@angular/core';
import { cloneWith, lowerCase } from 'cypress/types/lodash';

@Component({
  selector: 'contact-form',
  templateUrl: 
  './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

log(x:any)
{ 
console.log(x);
}

}
