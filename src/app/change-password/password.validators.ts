import { AbstractControl } from "@angular/forms";
import { resolve } from 'cypress/types/bluebird';

export class PasswordValidators{

static validOldPassword(control: AbstractControl)
{
 return new Promise((resolve) =>  {  
 if(control.value!='1234') //number of num or char minimum password
    resolve({invalidOldPassword: true });
    else
  resolve(null);

 });
}    



static passwordshouldMatch(control: AbstractControl)
 {
  let newPassword =control.get('newPassword');
  let confirmPassword =control.get('confirmPassword');
  if(newPassword?.value !== confirmPassword?.value)
   return {passwordshouldMatch:true};

  return null;

    
  



 }




}