import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class CoursesService {
  
  constructor() { 
 
  }

  getcourses()
  { 
    return ["course1", "course2","course3"];
  }
}
