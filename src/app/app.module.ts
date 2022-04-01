import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RecoveryPassComponent } from './component/recovery-pass/recovery-pass.component';
import { RecoveryPasswordComponent } from './component/recovery-password/recovery-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavbarComponent,
    RecoveryPassComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
