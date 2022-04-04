import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPassComponent } from './component/new-pass/new-pass.component';
import { RecoveryPassComponent } from './component/recovery-pass/recovery-pass.component';

const routes: Routes = [
  {path: 'recover', component: RecoveryPassComponent},
  {path: 'newpassword', component: NewPassComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
