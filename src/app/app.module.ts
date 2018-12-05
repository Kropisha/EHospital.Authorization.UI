import { RegistrationService } from './registration.service';
import { AuthorizationService } from './authorization.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patient/patients/patients.component';
import { PatientsRecentComponent } from './patient/patients-recent/patients-recent.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';

import { PatientService } from './patient/services/patient.service';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { RightBarComponent } from './shared/right-bar/right-bar.component';
import { PatientMainComponent } from './patient/patient-main/patient-main.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'patientMain', component: PatientMainComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientsRecentComponent,
    PatientDetailsComponent,
    LeftMenuComponent,
    TopBarComponent,
    RightBarComponent,
    PatientMainComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorizationService, PatientService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
