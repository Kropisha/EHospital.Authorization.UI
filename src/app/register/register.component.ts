import { User } from './../login/models/user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { get } from 'selenium-webdriver/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

@Input() user: User;

date = new Date();
  maxDate = (new Date().getFullYear()).toString() + '-0' + (new Date().getMonth() + 1).toString() + '-' + (new Date().getDate()).toString();

  constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private registrationService: RegistrationService,
  ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      country: [''],
      city: [''],
      address: [''],
      gender: [''],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() {
    return this.registerForm.controls;
   }

   public goToLogin() {
    this.router.navigate(['login']);
   }

private currentUser = function() {
  this.user = {
    firstname: this.f.firstName.value,
    lastname: this.f.lastName.value,
    birthDate: this.f.birthDate.value,
    phone: this.f.phone.value,
    country: this.f.country.value,
    city: this.f.city.value,
    address: this.f.address.value,
    gender: this.f.gender.value,
    email: this.f.email.value
  };
};

public Register() {
  this.registrationService.register(this.currentUser, this.f.password.value);
}

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.registrationService.register(this.currentUser, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['confirm']);
                },
                error => {
                    this.loading = false;
                });
  }
  dateChange(event) {
    console.log(event);
  }
}
