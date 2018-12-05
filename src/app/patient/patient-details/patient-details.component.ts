import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientRequest } from '../models/patient';
import { PatientViewRequest } from '../models/patientView';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input() patient: PatientRequest;
  //@Input() patient: PatientViewRequest;
  public patientDetails = new PatientRequest();

  constructor() {
    this.clearPatientData();
  }
 

  //constructor(private patientService: PatientService) {
  //  if (this.patient != null) {
  //    patientService.getPatientById(this.patient).subscribe(
  //      res => {
  //        this.patient = res;
  //        console.log(res);
  //      },
  //      err => console.log('Error retrieving diseases'));
  //  }
  //  else {
  //    this.clearPatientData();
  //  }    
  //}

  //constructor(private patientService: PatientService) {
  //  patientService.getPatientById(this.patient).subscribe(
  //    res => {
  //      this.patientDetails = res;
  //      console.log(res);
  //    },
  //    err => console.log('Error retrieving diseases')
  //  );
  //}

  ngOnInit() {
  }

  private clearPatientData = function () {  
    this.patient = {
      patientid: undefined,
      firstname: '',
      lastname: '',
      country: '',
      city: '',
      address: '',
      phone: '',
      email: ''
    };
  };

}
