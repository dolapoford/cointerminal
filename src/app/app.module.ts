import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupSlideComponent } from './component/signup-slide/signup-slide.component';
import { LoginSlideComponent } from './component/login-slide/login-slide.component';
import { EmailVerificationComponent } from './component/signup-slide/email-verification/email-verification.component';
import { PhoneVerificationComponent } from './component/signup-slide/phone-verification/phone-verification.component';
import { PhoneComponent } from './component/signup-slide/phone/phone.component';
import { CreateAccountComponent } from './component/signup-slide/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavbarComponent,
    EmailVerificationComponent,
    PhoneComponent,
    PhoneVerificationComponent,
    CreateAccountComponent,
    SignupSlideComponent,
    LoginSlideComponent
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
