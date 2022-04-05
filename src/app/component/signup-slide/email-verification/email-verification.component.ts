import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
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
  