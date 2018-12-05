import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientViewRequest } from '../models/patientView';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  //public patientsData: Array<PatientViewRequest>;
  public patientView: PatientViewRequest;
  @Output() editClicked = new EventEmitter<PatientViewRequest>();
  @Input() patientsData: Array<PatientViewRequest>;

  constructor() { }

  ngOnInit() {
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  //constructor(private patientService: PatientService) {
  //  patientService.getPatients().subscribe(
  //    res => {
  //      this.patientsData = res;
  //      console.log(res);
  //    },
  //    err => console.log('Error retrieving diseases')
  //  );
  //}

  

}
