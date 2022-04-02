import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  form:FormGroup= new FormGroup({});
  constructor() { }
 
  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl('', Validators.required),
      
    })
  }

}
