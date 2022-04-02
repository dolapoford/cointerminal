import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginVerifyComponent } from './component/login-verify/login-verify.component';
import { NewPassComponent } from './component/new-pass/new-pass.component';
import { RecoveryPassComponent } from './component/recovery-pass/recovery-pass.component';
import { RecoveryPasswordComponent } from './component/recovery-password/recovery-password.component';
import { SignupComponent } from './component/signup/signup.component';
import { EmailVerificationComponent } from './component/email-verification/email-verification.component';
import { PhoneVerificationComponent } from './component/phone-verification/phone-verification.component';
import { PhoneComponent } from './component/phone/phone.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login_verify', component: LoginVerifyComponent },
  { path: 'recovery_password', component: RecoveryPasswordComponent },
  { path: 'recover', component: RecoveryPassComponent },
  { path: 'newpassword', component: NewPassComponent },
  { path: 'email', component: EmailVerificationComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'phone-verify', component: PhoneVerificationComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
