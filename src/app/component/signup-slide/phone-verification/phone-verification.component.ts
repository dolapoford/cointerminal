import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.scss']
})
export class PhoneVerificationComponent implements OnInit {
  form:FormGroup= new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      one: new FormControl('', Validators.required),
      two: new FormControl('', Validators.required),
      three: new FormControl('', Validators.required),
      four: new FormControl('', Validators.required),
      five: new FormControl('', Validators.required),
      six: new FormControl('', Validators.required)
    })
  }

}
