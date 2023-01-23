import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors(){

    return ["Authors1","Authors2", "Authors3"];


  }
 
}
