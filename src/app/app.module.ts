import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EmailVerificationComponent } from './component/email-verification/email-verification.component';
import { PhoneComponent } from './component/phone/phone.component';
import { PhoneVerificationComponent } from './component/phone-verification/phone-verification.component';
import { PersonalComponent } from './component/personal/personal.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavbarComponent,
    EmailVerificationComponent,
    PhoneComponent,
    PhoneVerificationComponent,
    PersonalComponent,
    CreateAccountComponent
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
