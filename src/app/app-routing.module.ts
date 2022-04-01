import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RecoveryPassComponent } from './component/recovery-pass/recovery-pass.component';
import { RecoveryPasswordComponent } from './component/recovery-password/recovery-password.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path: 'newpassword', component: RecoveryPassComponent},
  {path: 'oldpassword', component: RecoveryPasswordComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
