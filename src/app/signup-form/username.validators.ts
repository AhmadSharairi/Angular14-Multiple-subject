import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { reject, resolve } from "cypress/types/bluebird";
import { contains } from "cypress/types/jquery";
import { retry } from "rxjs";

export class UsernameValidators{
static cannotContainSpace: ValidatorFn;

cannotContainSpace(control: AbstractControl): ValidationErrors | null
{
if((control.value as string).indexOf('')>=0)

return{ cannotContainSpace: true } ;

return null;



}

static shouldBeUniqe(control:AbstractControl): Promise<ValidationErrors |null>
{

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        if(control.value=='ahmad')
             resolve ({shouldBeUniqe:true});     
             else
              resolve(null);} 
              ,2000);   } );


}




}