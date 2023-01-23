import { ErrorHandler, NgModule } from "@angular/core";
import { NotFoundError } from "./NotFoundError";
import { AppError } from "./app-error";



  
  @NgModule({
    providers: [{provide: ErrorHandler}]
  })
  class MyModule {}
  
  
  
  
  class MyErrorHandler implements ErrorHandler {
    
    handleError(error:any) {

        if (error.status === 404) {
        
           
         
        }}}