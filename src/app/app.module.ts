import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/signup/signup.component';
import { EmailVerificationComponent } from './component/email-verification/email-verification.component';
import { PhoneComponent } from './component/phone/phone.component';
import { PhoneVerificationComponent } from './component/phone-verification/phone-verification.component';
import { NavCompComponent } from './component/nav-comp/nav-comp.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavbarComponent,
    SignupComponent,
    EmailVerificationComponent,
    PhoneComponent,
    PhoneVerificationComponent,
    NavCompComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
