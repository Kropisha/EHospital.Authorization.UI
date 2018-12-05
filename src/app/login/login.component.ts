import { CredentionalRequest } from './models/credentionals';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './../authorization.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { get } from 'selenium-webdriver/http';
import { User } from './models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
@Output() created = new EventEmitter<User>();
@Input() credent: CredentionalRequest;

  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authorizationService: AuthorizationService,
  ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
      userLogin: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() {
    return this.loginForm.controls;
  }
  public goToRegister() {
    this.router.navigate(['register']);
   }

   public Login = function(event) {
    // this.created.emit(this.credent);
     this.authorizationService.login(this.f.userLogin.value, this.f.password.value).subscribe(res => res.valueOf);

   // if (token != null) {
    this.router.navigate(['patientMain']);
   //   return token;
   // }
   };
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authorizationService.login(this.f.userLogin.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                   // this.alertService.error(error);
                    this.loading = false;
                });
  }
}
