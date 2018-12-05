import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PatientViewRequest } from '../models/patientView';
import { PatientRequest } from '../models/patient';

//@Injectable({
//  providedIn: 'root'
//})

@Injectable()
export class PatientService {

  private readonly headers: HttpHeaders;
  private accessPointUrl = 'http://localhost:5000/api/patient';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getPatients(): Observable<PatientViewRequest[]> {
    // Get all patients as views.
    return this.http.get<PatientViewRequest[]>(this.accessPointUrl, { headers: this.headers }).pipe(map(response => {
      return response;
    }));
  }

  public getRecentPatients(): Observable<PatientViewRequest[]> {
    // Get recent patients as views.
    return this.http.get<PatientViewRequest[]>(this.accessPointUrl+'/recent', { headers: this.headers }).pipe(map(response => {
      return response;
    }));
  }

  public getPatientById(payload): Observable<PatientRequest> {
    // Get patient by Id as detailed.
    return this.http.get<PatientRequest>(this.accessPointUrl + '/id=' + payload.id, { headers: this.headers });

  }
  
}
