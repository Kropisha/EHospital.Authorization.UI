import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientViewRequest } from '../models/patientView';


@Component({
  selector: 'app-patients-recent',
  templateUrl: './patients-recent.component.html',
  styleUrls: ['./patients-recent.component.css']
})
export class PatientsRecentComponent {

  public patientsData: Array<PatientViewRequest>;
  public patientView: PatientViewRequest;

  constructor(private patientService: PatientService) {
    patientService.getRecentPatients().subscribe(
      res => {
        this.patientsData = res;
        console.log(res);
      },
      err => console.log('Error retrieving diseases')
    );
  }

}
