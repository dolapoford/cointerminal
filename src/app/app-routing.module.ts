import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginVerifyComponent } from './component/login-slide/login-verify/login-verify.component';
import { NewPassComponent } from './component/login-slide/new-pass/new-pass.component';
import { RecoveryPassComponent } from './component/login-slide/recovery-pass/recovery-pass.component';
import { RecoveryPasswordComponent } from './component/login-slide/recovery-password/recovery-password.component';
import { CreateAccountComponent } from './component/signup-slide/create-account/create-account.component';
import { EmailVerificationComponent } from './component/signup-slide/email-verification/email-verification.component';
import { PhoneVerificationComponent } from './component/signup-slide/phone-verification/phone-verification.component';
import { PhoneComponent } from './component/signup-slide/phone/phone.component';
import { SignupComponent } from './component/signup-slide/signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login_verify', component: LoginVerifyComponent },
  { path: 'create_account', component: CreateAccountComponent },
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
