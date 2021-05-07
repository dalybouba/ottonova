import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import dates from '../../../dates.json'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  clientForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      dateEnd: ['', [Validators.required]],
      dateStart: ['', [Validators.required]],
    })
  }
  public dateList: { start: Date, end: Date }[] = dates.result;
  createCustomer(form: any) {
    console.log(form)
    this.router.navigate(['result'])
  }
}
