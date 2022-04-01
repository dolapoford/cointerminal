import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginVerifyComponent } from './component/login-verify/login-verify.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RecoveryPassComponent } from './component/recovery-pass/recovery-pass.component';
import { RecoveryPasswordComponent } from './component/recovery-password/recovery-password.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login_verify', component: LoginVerifyComponent },
  { path: 'recovery_password', component: RecoveryPasswordComponent },
  {path: 'newpassword', component: RecoveryPassComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
