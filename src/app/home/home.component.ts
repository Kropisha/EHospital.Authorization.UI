import { AuthorizationService } from './../authorization.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (public authorizationService: AuthorizationService, private router: Router) {
  }
 public goToLogin() {
  this.router.navigate(['login']);
 }
  ngOnInit() {

  }

}
