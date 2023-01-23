import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent 
{
 form:any;

constructor(fb: FormBuilder)
{
  
this.form = fb.group({
name:['',Validators.required],
contact: fb.group({
email:[],
phone: []
}),
topics: fb.array([])

});

}



}
