import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { EmailVerificationComponent } from './component/email-verification/email-verification.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PhoneVerificationComponent } from './component/phone-verification/phone-verification.component';
import { PhoneComponent } from './component/phone/phone.component';


const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
 {path: 'create', component:CreateAccountComponent},
  {path:'email',component:EmailVerificationComponent},
  {path:'phone',component:PhoneComponent},
  {path:'phone-verify',component:PhoneVerificationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
